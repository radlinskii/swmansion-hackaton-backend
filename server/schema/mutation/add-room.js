const RoomType = require('../../type/room');
const DoneRoomModel = require('../../model/room');

const SprintModel = require('../../model/sprint');

const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = graphql;

module.exports = {
  type: RoomType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString), },
    sprintID: { type: new GraphQLNonNull(GraphQLID), },
  },

  async resolve(parent, args) {
    const sprint = await SprintModel.findById(args.sprintID).exec();
    const Room = new DoneRoomModel({
      name: args.name,
      sprint: sprint,
    });
    return Room.save();
  },
};
