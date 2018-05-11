const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',

  fields: () => ({
    id: { type: GraphQLString, },
    username: { type: GraphQLString, },
    password: { type: GraphQLString, },
    points: { type: GraphQLInt, },
  }),
});

module.exports = UserType;
