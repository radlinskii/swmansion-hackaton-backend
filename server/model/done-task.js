const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doneTaskSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  task: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true,
  },
  sprint: {
    type: Schema.Types.ObjectId,
    ref: 'Sprint',
    required: true,
  },

});

module.exports= mongoose.model('DoneTask', doneTaskSchema);
