const RoomType = require('../../type/room');
const { GraphQLID, } = require('graphql');


module.exports = {
  type: RoomType,
  args: { id: { type: GraphQLID, }, },
  resolve(parent, args) {
    //code to get data from db / pther source
    //return _.find(rooms, { id: args.id, });
  },
};
