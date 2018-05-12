const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',

  fields: () => ({
    id: { type: GraphQLID, },
    username: { type: GraphQLString, },
    password: { type: GraphQLString, },
    points: { type: GraphQLInt, },
  }),
});

module.exports = UserType;
