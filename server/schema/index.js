const UserQuery = require('./query/user');
const addUserMutation = require('./mutation/add-user');

const addTaskMutation = require('./mutation/add-task');
const addDoneTaskMutation = require('./mutation/add-done-task');
const addSprintMutation = require('./mutation/add-sprint');

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
    addDoneTask: addDoneTaskMutation,
    addSprint: addSprintMutation,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
