'use strict';

// const dynamoose = require('dynamoose');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async (event, callback) => {
  const params = {
    TableName: 'users',
    FilterExpression: 'id = :uid and contains (skills, :skill)',
    ExpressionAttributeValues: {
      ':uid': event.pathParameters.userId,
      ':skill': 'Primeiros Socorros',
    },
  };

  return dynamoDb.scan(params, (error, data) => {
    if (error) {
      callback(error);
    }
    const status = data.Items.length > 0;
    callback(error, { status });
  });
};
