const { buildSchema } = require('graphql');

exports.schema = buildSchema(`
  type Query {
    hello: String
  }
`);

exports.root = { hello: () => 'Hello World!' };
