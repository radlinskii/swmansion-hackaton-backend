const UserType = require('../../type/user');
const { GraphQLID, } = require('graphql');


module.exports = {
  type: UserType,
  args: { id: { type: GraphQLID, }, },
  resolve(parent, args) {
    //code to get data from db / pther source
    //return _.find(users, { id: args.id, });
  },
};
