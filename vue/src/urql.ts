import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from "@urql/core";
import { devtoolsExchange } from "@urql/devtools";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { token } from "./hooks/auth";

const wsUrl = String(import.meta.env.VITE_APP_HASURA_WS_URL);

const subscriptionClient = new SubscriptionClient(wsUrl, {
  reconnect: true,
  lazy: true,
  connectionParams: () => ({
    headers: {
      "content-type": "application/json",
      ...(token.value && { authorization: `Bearer ${token.value}` }),
    },
  }),
});

export const urqlOptions = createClient({
  url: "/api/v1/graphql",
  fetchOptions: () => ({
    headers: {
      "content-type": "application/json",
      ...(token.value && { authorization: `Bearer ${token.value}` }),
    },
  }),
  requestPolicy: "cache-and-network",
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      // @ts-ignore
      forwardSubscription: (operation) => subscriptionClient.request(operation),
    }),
  ],
});
