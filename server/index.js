const errorMiddleware = require('./middleware/error');
const graphQLHTTP = require('express-graphql');

const express = require('express');
const app = express();

const RootSchema = require('./type/index');

require('./middleware')(app);

app.use('/graphql', graphQLHTTP({
  schema: RootSchema,
  graphiql: true,
}));

app.use(errorMiddleware);

module.exports = app;
