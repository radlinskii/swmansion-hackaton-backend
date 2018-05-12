const UserType = require('./user');
const RoomType = require('./room');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
} = graphql;

const _ = require('lodash');
const users = [
  { id: '1', username: 'igi', password: 'catbeef', points: 4, },
  { id: '2', username: 'aga', password: 'dogsausage', points: 2, },
];

const rooms = [
  { id: '1', roommates: [users[0], users[1], ], },
  { id: '2', roommates: [users[2], users[3], ], },
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID, }, },
      resolve(parent, args) {
        //code to get data from db / pther source
        return _.find(users, { id: args.id, });
      },
    },
    room: {
      type: RoomType,
      args: { id: { type: GraphQLID, }, },
      resolve(parent, args) {
        //code to get data from db / pther source
        return _.find(rooms, { id: args.id, });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
