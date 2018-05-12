const TaskType = require('./task');
const UserType = require('./user');

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
      resolve(parent) {
        //code to get data from db / pther source
        //return _.find(users, { id: parent.user.id, });
      },
    },
    task: {
      type: TaskType,
      resolve(parent) {
        //code to get data from db / pther source
        //return _.find(tasks, { id: parent.task.id, });
      },
    },
  }),
});

module.exports = DoneTaskType;
