const errorMiddleware = require('./middleware/error');

const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('message: Init');
});

app.use(errorMiddleware);

module.exports = app;
