import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import './db/db';
import grqlSchema from './data/grqlSchema';

const PORT = process.env.PORT || 3001;

const app = express();

// the GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: grqlSchema }));

// Graphical interactive in-browser GraphQL IDE located at this url
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// Serving the build files when in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
