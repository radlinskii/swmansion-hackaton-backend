const DoneTaskType = require('../../type/done-task');
const DoneTaskModel = require('../../model/done-task');

const TaskModel = require('../../model/task');
const UserModel = require('../../model/user');
const SprintModel = require('../../model/sprint');

const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = graphql;

module.exports = {
  type: DoneTaskType,
  args: {
    date: { type: new GraphQLNonNull(GraphQLString), },
    userID: { type: new GraphQLNonNull(GraphQLID), },
    taskID: { type: new GraphQLNonNull(GraphQLID), },
    sprintID: { type: new GraphQLNonNull(GraphQLID), },
  },

  async resolve(parent, args) {
    const user = await UserModel.findById(args.userID).exec();
    const task = await TaskModel.findById(args.taskID).exec();
    const sprint = await SprintModel.findById(args.sprintID).exec();
    //console.log(user);
    const doneTask = new DoneTaskModel({
      date: args.date,
      user: user,
      task: task,
      sprint: sprint,
    });
    return doneTask.save();
  },
};
