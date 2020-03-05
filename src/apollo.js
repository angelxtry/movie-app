import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  }),
  connectToDevTools: true,
});

export default client;
