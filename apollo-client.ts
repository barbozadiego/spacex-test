import { ApolloClient, InMemoryCache } from '@apollo/client';

// The Apollo/client library configuration file is created for authentication with the API and cache management, thus avoiding repeating queries.

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

export default client;