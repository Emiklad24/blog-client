import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createLocalStoragePersistor } from "react-query/createLocalStoragePersistor-experimental";
import { QueryClient } from "react-query";
import { broadcastQueryClient } from "react-query/broadcastQueryClient-experimental";

export const isDev = process.env.NODE_ENV !== "production";

// query client settings
export const queryClientSettings = {
  defaultOptions: {
    queries: {
      retry: true,
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      cacheTime: 604800000, //7 days
      refetchInterval: 1000 * 60 * 60, //60 mins
      refetchIntervalInBackground: true,
      suspense: false,
      staleTime: 604800000, //7 days
    },
    mutations: {
      // mutation options
    },
  },
};

export const screenWidth = window?.screen?.width;
// App routing settings
export const delay = 500;
export const timeout = 20000;

export const queryClient = new QueryClient(queryClientSettings);
const localStoragePersistor = createLocalStoragePersistor({
  localStorageKey: "BLOG_CACHE",
  throttleTime: 1000,
});

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
});

broadcastQueryClient({
  queryClient,
  broadcastChannel: "blog-app",
});
