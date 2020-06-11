import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {RestLink} from "apollo-link-rest";
import {HttpLink} from "apollo-link-http";

const restLink = new HttpLink({
    uri: 'https://api.graphql.jobs/',
})

export const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
})