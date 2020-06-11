import ApolloClient, {InMemoryCache} from 'apollo-boost';

const memoryCache = new InMemoryCache();

export const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: memoryCache,
});
