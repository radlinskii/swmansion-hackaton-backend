const DoneTaskType = require('./done-task');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
} = graphql;

const SprintType = new GraphQLObjectType({
  name: 'Sprint',

  fields: () => ({
    id: { type: GraphQLID, },
    prize: { type: GraphQLString, },
    deadline: { type: GraphQLString, },
    doneTasks: {
      type: new GraphQLList(DoneTaskType),
      resolve(parent) {
        //const room = _.find(sprints, { id: parent.id, });
        //return room.doneTasks;
      },
    },
  }),
});

module.exports = SprintType;
