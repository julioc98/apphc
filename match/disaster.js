'use strict';

// const dynamoose = require('dynamoose');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async (event, callback) => {
  const param = {
    TableName: 'disasters',
    Key: {
      id: event.pathParameters.disasterId,
    },
  };

  return dynamoDb.get(param, (error, disaster) => {
    if (error) {
      callback(error);
    }
    const skillsArr = disaster.Item.skills;
    let qry = '';
    // let qry = 'contains (skills, :skill0) ';

    // skillsArr.forEach(function(value) {
    //   qry = qry + ' contains (skills, :skill) ';
    // });

    let eav = {
      // ':skill0': skillsArr[0],
    };

    skillsArr.forEach((item, i) => {
      const str = `{":skill${i}":"${item}"}`;
      const obj = JSON.parse(str);
      eav = { ...eav, ...obj };
      qry = qry + `or contains (skills, :skill${i}) `;
    });

    // for (let i = 1; skillsArr.length; i++) {
    //   const nm = `skill${i}`;
    //   eav = { ...eav, nm: skillsArr[i] };
    //   qry = qry + `or contains (skills, :skill${i}) `;
    // }

    const params = {
      ExpressionAttributeValues: eav,
      FilterExpression: qry.substr(2),
      TableName: 'users',
    };

    return dynamoDb.scan(params, (error, data) => {
      if (error) {
        callback(error);
      }

      callback(error, data.Items);
    });
    // callback(error, params);
  });
};
