const DoneTaskType = require('./done-task');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
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

const doneTasks = [
  { id: '1',
    date: 'dzisiaj',
    user: users[0],
    task: tasks[0],
  },
  { id: '2',
    date: 'wczoraj',
    user: users[1],
    task: tasks[1],
  },
];

const sprints = [
  { id: '1', prize: 'piwo', deadline: '4 lipca', doneTasks: doneTasks, },
  { id: '2', prize: 'wodka', deadline: '14 stycznia', doneTasks: doneTasks, },
];

const SprintType = new GraphQLObjectType({
  name: 'Sprint',

  fields: () => ({
    id: { type: GraphQLID, },
    prize: { type: GraphQLString, },
    deadline: { type: GraphQLString, },
    doneTasks: {
      type: new GraphQLList(DoneTaskType),
      resolve(parent) {
        const room = _.find(sprints, { id: parent.id, });
        return room.doneTasks;
      },
    },
  }),
});

module.exports = SprintType;
