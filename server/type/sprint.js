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
  { id: '2', username: 'aga', password: 'dogsausage', points: 4, },
  { id: '3', username: 'natalka', password: 'fishsandwich', points: 4, },
  { id: '4', username: 'grzesiek', password: 'iphonbeef', points: 0, },
  { id: '5', username: 'darek', password: 'applesausage', points: 0, },
];

const tasks = [
  { id: '1', title: 'zrobienie apki', reward: 3, iconIndex: 0, },
  { id: '2', title: 'mycie podłogi', reward: 4, iconIndex: 1, },
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
  { id: '3',
    date: 'dzisiaj',
    user: users[3],
    task: tasks[1],
  },
  { id: '4',
    date: 'wczoraj',
    user: users[4],
    task: tasks[1],
  },
];

const sprints = [
  { id: '1', prize: 'piwo', deadline: '7/13/2010', doneTasks: [doneTasks[0], doneTasks[1], ], },
  { id: '2', prize: 'wodka', deadline: '7/29/2018', doneTasks: [doneTasks[2], doneTasks[3], ], },
];

const rooms = [
  { id: '1', roommates: [users[0], users[1], ], sprint: sprints[0], },
  { id: '2', roommates: [users[2], users[3], ], sprint: sprints[1], },
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
