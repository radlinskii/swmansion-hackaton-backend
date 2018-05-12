const UserQuery = require('./query/user');
const addUserMutation = require('./mutation/add-user');

const addTaskMutation = require('./mutation/add-task');

const RoomQuery = require('./query/room');

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: UserQuery,
    room: RoomQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: addUserMutation,
    addTask: addTaskMutation,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
