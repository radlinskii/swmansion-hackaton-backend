const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = graphql;

const SprintType = new GraphQLObjectType({
  name: 'Sprint',

  fields: () => ({
    id: { type: GraphQLID, },
    prize: { type: GraphQLString, },
    deadline: { type: GraphQLString, },
  }),
});

module.exports = SprintType;
