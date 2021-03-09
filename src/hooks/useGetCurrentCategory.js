import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCurrentCategory } from "../services/getCurrentCategory.service";
import { getCurrentCategoryKey } from "../util/appCacheKeys";

export const useGetCurrentCategory = () => {
  const urlSlug = useParams()?.categoryName;
  const { data, isLoading } = useQuery(
    [getCurrentCategoryKey, urlSlug],
    getCurrentCategory
  );
  return {
    result: data?.[0],
    urlSlug,
    isLoading,
    postLength: data?.[0]?.posts?.length,
  };
};
