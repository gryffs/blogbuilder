import React from 'react';
import { Router, Route } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import NotFound from './components/NotFound';
import Posts from './components/Posts';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: '/graphql'}),
});

const Routes = (props) => (
  <ApolloProvider client={client}>
    <Router {...props}>
      <Route path="/" component={App} />
      <Route path="posts" component={Posts} />
      <Route path="*" component={NotFound} />
    </Router>
  </ApolloProvider>
);

export default Routes;
