const SprintModel = require('../../model/sprint');
const SprintType = require('../../type/sprint');

const graphql = require('graphql');
const {
  GraphQLString,
  GraphQLNonNull,
} = graphql;

module.exports = {
  type: SprintType,
  args: {
    prize: { type: new GraphQLNonNull(GraphQLString), },
    deadline: { type: new GraphQLNonNull(GraphQLString), },
  },
  resolve(parent, args) {
    const Sprint = new SprintModel({
      prize: args.prize,
      deadline: args.deadline,
    });

    return Sprint.save();
  },
};
