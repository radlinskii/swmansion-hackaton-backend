const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SprintSchema = new Schema({
  prize: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});

module.exports= mongoose.model('Sprint', SprintSchema);
