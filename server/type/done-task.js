const TaskType = require('./task');
const UserType = require('./user');
const SprintType = require('./sprint');
const DoneTaskModel = require('../model/done-task');
const UserModel = require('../model/user');
const TaskModel = require('../model/task');
const SprintModel = require('../model/sprint');

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = graphql;

const DoneTaskType = new GraphQLObjectType({
  name: 'DoneTask',

  fields: () => ({
    id: { type: GraphQLID, },
    date: { type: GraphQLString, },
    user: {
      type: UserType,
      async resolve(parent) {
        const doneTask = await DoneTaskModel.findById(parent._id).exec();
        return await UserModel.findById(doneTask.user).exec();
      },
    },
    task: {
      type: TaskType,
      async resolve(parent) {
        const doneTask = await DoneTaskModel.findById(parent._id).exec();
        return await TaskModel.findById(doneTask.task).exec();
      },
    },
    sprint: {
      type: SprintType,
      async resolve(parent) {
        const doneTask = await DoneTaskModel.findById(parent._id).exec();
        return await SprintModel.findById(doneTask.sprint).exec();
      },
    },
  }),
});

module.exports = DoneTaskType;
