const UserType = require('./user');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const _ = require('lodash');
const users = [
  { id: '1', username: 'igi', password: 'catbeef', points: 4, },
  { id: '2', username: 'aga', password: 'dogsausage', points: 2, },
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString, }, },
      resolve(parent, args) {
        //code to get data from db / pther source
        return _.find(users, { id: args.id, });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
