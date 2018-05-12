const UserType = require('../type/user');
const UserModel = require('../model/user');

const RoomType = require('../type/room');

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID, }, },
      resolve(parent, args) {
        //code to get data from db / pther source
        //return _.find(users, { id: args.id, });
      },
    },
    room: {
      type: RoomType,
      args: { id: { type: GraphQLID, }, },
      resolve(parent, args) {
        //code to get data from db / pther source
        //return _.find(rooms, { id: args.id, });
      },
    },
  },
});


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString, },
        password: { type: GraphQLString, },
        points: { type: GraphQLInt, },
      },
      resolve(parent, args) {
        const user = new UserModel({
          username: args.username,
          password: args.password,
          points: args.points,
        });
        user.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
