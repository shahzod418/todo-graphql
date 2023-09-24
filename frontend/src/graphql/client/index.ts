import { ApolloClient, InMemoryCache } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';

import { GRAPHQL_URI } from '@config';

if (import.meta.env.DEV) {
  loadDevMessages();
  loadErrorMessages();
}

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});
