import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { getSinglePost } from "../services/getSinglePost.service";
import { getSinglePostKey } from "../util/appCacheKeys";

export const useCurrentPostData = () => {
  const pushedPostState = useHistory()?.location?.state?.post;
  const urlSlug = useParams()?.title;
  const slug = pushedPostState?.slug || urlSlug;
  const { data, isLoading } = useQuery(
    [getSinglePostKey, slug, pushedPostState?._id, pushedPostState?.title],
    getSinglePost
  );

  const displayedPost =
    data?.[0]?.title && data?.[0]?.title !== "" ? data?.[0] : pushedPostState;
  return {
    slug,
    data,
    isLoading,
    pushedPostState,
    displayedPost,
  };
};
