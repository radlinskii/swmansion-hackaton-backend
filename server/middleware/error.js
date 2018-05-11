const colors = require('colors');

module.exports = (err, req, res, next) => {
  console.error(colors.red(err.stack));
  res.status(500).send('Oops');
};
