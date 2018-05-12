require('colors');
const errorMiddleware = require('./middleware/error');
const graphQLHTTP = require('express-graphql');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open' ,() => {
  console.log('connected to DB'.bgGreen + '\n');
});


const express = require('express');
const app = express();

const schema = require('./schema');

require('./middleware')(app);

app.use('/graphql', graphQLHTTP({
  schema,
  graphiql: true,
}));

app.use(errorMiddleware);

module.exports = app;
