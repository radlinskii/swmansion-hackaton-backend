const UserType = require('./user');
const SprintType = require('./sprint');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
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

const rooms = [
  { id: '1', roommates: [users[0], users[1], ], sprint: sprints[0], },
  { id: '2', roommates: [users[2], users[3], ], sprint: sprints[1], },
];

const RoomType = new GraphQLObjectType({
  name: 'Room',

  fields: () => ({
    id: { type: GraphQLID, },
    sprint: {
      type: SprintType,
      resolve(parent) {
        const room = _.find(rooms, { id: parent.id, });
        return room.sprint;
      },
    },
    roommates: {
      type: new GraphQLList(UserType),
      resolve(parent) {
        const room = _.find(rooms, { id: parent.id, });
        return room.roommates;
      },
    },
  }),
});

module.exports = RoomType;
