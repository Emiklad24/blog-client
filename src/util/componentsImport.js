import PostMarkdownSuspense from "../components/SuspenseComponents/PostMarkdownSuspense";
import { delay, timeout } from "../util/misc";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

export const PostMarkDown = LoadableVisibility({
  loader: () => import("../components/PostBodyMarkdown/PostBodyMarkdown"),
  loading: PostMarkdownSuspense,
  delay: delay,
  timeout: timeout,
});
