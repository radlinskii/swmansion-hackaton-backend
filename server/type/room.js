const UserType = require('./user');
const SprintType = require('./sprint');
const TaskType = require('./task');
const RoomModel = require('../model/room');
const SprintModel = require('../model/sprint');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
} = graphql;

const RoomType = new GraphQLObjectType({
  name: 'Room',

  fields: () => ({
    id: { type: GraphQLID, },
    sprint: {
      type: SprintType,
      async resolve(parent) {
        //const room = _.find(rooms, { id: parent.id, });
        //return room.sprint;
        const Room = await RoomModel.findById(parent._id).exec();
        return await SprintModel.findById(Room.sprint).exec();
      },
    },
    roommates: {
      type: new GraphQLList(UserType),
      resolve(parent) {
        //const room = _.find(rooms, { id: parent.id, });
        //return room.roommates;
      },
    },
  }),
});

module.exports = RoomType;


/*


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
  { id: '1', prize: 'piwo', deadline: '7/13/2018', doneTasks: [doneTasks[0], doneTasks[1], ], },
  { id: '2', prize: 'wodka', deadline: '7/29/2018', doneTasks: [doneTasks[2], doneTasks[3], ], },
];

const rooms = [
  { id: '1', roommates: [users[0], users[1], ], sprint: sprints[0], },
  { id: '2', roommates: [users[2], users[3], ], sprint: sprints[1], },
];


 */
