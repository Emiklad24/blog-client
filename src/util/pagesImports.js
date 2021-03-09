import LoadingSuspense from "../components/SuspenseComponents/PageSuspense";
import { delay, timeout } from "../util/misc";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

// All pages to be used in App.js should be configured here (lazy loading suspense etc)

export const Home = LoadableVisibility({
  loader: () => import("../pages/Home/Home"),
  loading: LoadingSuspense,
  delay: delay,
  timeout: timeout,
});

export const Category = LoadableVisibility({
  loader: () => import("../pages/Category/Category"),
  loading: LoadingSuspense,
  delay: delay,
  timeout: timeout,
});
export const Post = LoadableVisibility({
  loader: () => import("../pages/Post/Post"),
  loading: LoadingSuspense,
  delay: delay,
  timeout: timeout,
});
