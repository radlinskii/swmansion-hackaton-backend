const errorMiddleware = require('./middleware/error');
const graphQLHTTP = require('express-graphql');

const express = require('express');
const app = express();

const schema = require('./type');

require('./middleware')(app);

app.use('/graphql', graphQLHTTP({
  schema,
  graphiql: true,
}));

app.use(errorMiddleware);

module.exports = app;
