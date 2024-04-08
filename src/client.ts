import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getRequestURL } from "./service";

const client = new ApolloClient({
  uri: getRequestURL({}),
  cache: new InMemoryCache(),
});

export default client;
