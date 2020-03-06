import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  }),
  connectToDevTools: true,
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: !isLiked } });
      }
    }
  }
});

export default client;
