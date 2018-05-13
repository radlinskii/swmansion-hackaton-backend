const RoomType = require('../../type/room');
const { GraphQLID, } = require('graphql');

const RoomModel = require('../../model/room');

module.exports = {
  type: RoomType,
  args: { id: { type: GraphQLID, }, },
  resolve(parent, args) {
    return RoomModel.findById(args.id);
  },
};
