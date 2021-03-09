import { useQuery } from "react-query";
import { getPostsCurrentCategory } from "../services/getPostsCurrentCategory.service";
import { getPostsCurrentCategoryKey } from "../util/appCacheKeys";
import { useGetCurrentCategory } from "./useGetCurrentCategory";

export const useGetPostsCurrentCategory = (startPostion = 0) => {
  const { urlSlug, postLength, result } = useGetCurrentCategory();

  const { data, isLoading } = useQuery(
    [getPostsCurrentCategoryKey, result?._id, startPostion],
    getPostsCurrentCategory
  );
  return {
    data,
    postLength,
    result,
    urlSlug,
    isLoading,
  };
};
