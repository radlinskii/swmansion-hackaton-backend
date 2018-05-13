const UserType = require('../../type/user');
const { GraphQLID, } = require('graphql');

const UserModel = require('../../model/user');

module.exports = {
  type: UserType,
  args: { id: { type: GraphQLID, }, },
  resolve(parent, args) {
    return UserModel.findById(args.id);
  },
};
