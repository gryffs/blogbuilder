import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type Query {
  testString: String
}
`;


export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
