const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sprint: {
    type: Schema.Types.ObjectId,
    ref: 'Sprint',
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports= mongoose.model('Room', RoomSchema);
