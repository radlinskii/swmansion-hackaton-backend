const TaskType = require('../../type/task');
const TaskModel = require('../../model/task');

const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

module.exports = {
  type: TaskType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString), },
    reward: { type: new GraphQLNonNull(GraphQLInt), },
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
