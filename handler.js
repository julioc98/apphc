'use strict';

const Create = require('./crud/create.js');
const ReadAll = require('./crud/read-all.js');
const ReadOne = require('./crud/read-one.js');
const Update = require('./crud/update.js');
const Delete = require('./crud/delete.js');
const MatchUser = require('./match/user.js');
const MatchAll = require('./match/disaster.js');

module.exports.matchAll = (event, context, callback) => {
  MatchAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.matchUser = (event, context, callback) => {
  MatchUser(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.create = (event, context, callback) => {
  Create(event, (error, result) => {
    const response = {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  ReadAll(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readOne = (event, context, callback) => {
  ReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  Update(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.delete = (event, context, callback) => {
  Delete(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};
