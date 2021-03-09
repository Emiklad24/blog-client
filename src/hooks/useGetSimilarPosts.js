import { useQuery } from "react-query";
import { getSimilarPostsKey } from "../util/appCacheKeys";
import { useCurrentPostData } from "./useCurrentPostData";
import { getSimilarPosts } from "../services/getSimilarPosts.service";

export const useGetSimilarPosts = () => {
  const { displayedPost } = useCurrentPostData();

  const similarPost = useQuery(
    [
      getSimilarPostsKey,
      displayedPost?.authors?.[0]?._id,
      displayedPost?.categories?.[0]?._id,
    ],
    getSimilarPosts
  );

  return {
    //remove the current post from returned array. this is to avoid showing the user a post they are currently reading as part of similar posts.
    similarPosts:
      similarPost &&
      Array.isArray(similarPost?.data) &&
      similarPost?.data?.length !== 0
        ? similarPost?.data?.filter((item) => item?._id !== displayedPost?._id)
        : null,
    displayedPost,
  };
};
