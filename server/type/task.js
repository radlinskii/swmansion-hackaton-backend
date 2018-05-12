const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = graphql;

const TaskType = new GraphQLObjectType({
  name: 'Task',

  fields: () => ({
    id: { type: GraphQLID, },
    title: { type: GraphQLString, },
    reward: { type: GraphQLInt, },
    iconIndex: { type: GraphQLInt, },
  }),
});

module.exports = TaskType;
