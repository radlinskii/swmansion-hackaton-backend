const UserType = require('./user');
const SprintType = require('./sprint');
const RoomModel = require('../model/room');
const DoneTaskType = require('./done-task');
const DoneTaskModel = require('../model/done-task');
const SprintModel = require('../model/sprint');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
} = graphql;

const RoomType = new GraphQLObjectType({
  name: 'Room',

  fields: () => ({
    id: { type: GraphQLID, },
    name: { type: GraphQLString, },
    sprint: {
      type: SprintType,
      async resolve(parent) {
        //const room = _.find(rooms, { id: parent.id, });
        //return room.sprint;
        const Room = await RoomModel.findById(parent._id).exec();
        return await SprintModel.findById(Room.sprint).exec();
      },
    },
    roommates: {
      type: new GraphQLList(UserType),
      resolve(parent) {
        //const room = _.find(rooms, { id: parent.id, });
        //return room.roommates;
      },
    },
    doneTasks: {
      type: new GraphQLList(DoneTaskType),
      async resolve(parent) {
        const Room = await RoomModel.findById(parent._id).exec();
        return await DoneTaskModel.find({ sprint: Room.sprint, }).exec();
      },
    }
  }),
});

module.exports = RoomType;
