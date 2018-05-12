const UserType = require('../../type/user');
const UserModel = require('../../model/user');

const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLInt,
} = graphql;

module.exports = {
  type: UserType,
  args: {
    username: { type: GraphQLString, },
    password: { type: GraphQLString, },
    points: { type: GraphQLInt, },
  },
  resolve(parent, args) {
    const user = new UserModel({
      username: args.username,
      password: args.password,
      points: args.points,
    });
    return user.save();
  },
};
