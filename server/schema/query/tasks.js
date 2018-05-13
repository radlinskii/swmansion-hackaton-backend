const TaskType = require('../../type/task');
const {
  GraphQLList,
} = require('graphql');

const TaskModel = require('../../model/task');

module.exports = {
  type: GraphQLList(TaskType),
  resolve() {
    return TaskModel.find({});
  },
};
