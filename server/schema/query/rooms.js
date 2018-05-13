const RoomType = require('../../type/room');
const {
  GraphQLList,
} = require('graphql');

const RoomModel = require('../../model/room');

module.exports = {
  type: GraphQLList(RoomType),
  resolve() {
    return RoomModel.find({});
  },
};
