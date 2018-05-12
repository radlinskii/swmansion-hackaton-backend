require('dotenv').config();
require('colors');

const app = require('./server');

app.listen(process.env.PORT, err => {
  if(err) {
    console.error(err);
  }
  console.log(`running in ${process.env.NODE_ENV} on localhost:${process.env.PORT}`.bgGreen);
});
