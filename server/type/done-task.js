const TaskType = require('./task');
const UserType = require('./user');

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = graphql;

const _ = require('lodash');

const users = [
  { id: '1', username: 'igi', password: 'catbeef', points: 4, },
  { id: '2', username: 'aga', password: 'dogsausage', points: 2, },
  { id: '3', username: 'grzesiek', password: 'iphonbeef', points: 0, },
  { id: '4', username: 'darek', password: 'applesausage', points: 0, },
];

const tasks = [
  { id: '1', title: 'zmywanie podlogi', reward: 3, iconIndex: 0, },
  { id: '2', title: 'mycie lodowki', reward: 4, iconIndex: 1, },
];

const DoneTaskType = new GraphQLObjectType({
  name: 'DoneTask',

  fields: () => ({
    id: { type: GraphQLID, },
    date: { type: GraphQLString, },
    user: {
      type: UserType,
      resolve(parent) {
        //code to get data from db / pther source
        return _.find(users, { id: parent.user.id, });
      },
    },
    task: {
      type: TaskType,
      resolve(parent) {
        //code to get data from db / pther source
        return _.find(tasks, { id: parent.task.id, });
      },
    },
  }),
});

module.exports = DoneTaskType;
