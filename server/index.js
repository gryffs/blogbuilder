import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import grqlSchema from './data/grqlSchema';

const PORT = process.env.PORT || 9000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: grqlSchema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
