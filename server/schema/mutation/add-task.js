const TaskType = require('../../type/task');
const TaskModel = require('../../model/task');

const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
} = graphql;

module.exports = {
  type: TaskType,
  args: {
    title: { type: GraphQLString, },
    reward: { type: GraphQLInt, },
    iconIndex: { type: GraphQLInt, },
  },
  resolve(parent, args) {
    const task = new TaskModel({
      title: args.title,
      reward: args.reward,
      iconIndex: args.iconIndex,
    });
    return task.save();
  },
};
