const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  reward: {
    type: Number,
    required: true,
  },
  iconIndex: {
    type: Number,
    required: true,
  },

});

module.exports= mongoose.model('Task', taskSchema);
