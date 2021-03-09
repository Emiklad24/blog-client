import { useQuery } from "react-query";
import { getAllCategories } from "../services/getAllCategories.service";
import { getAllCategoriesKey } from "../util/appCacheKeys";

export const useGetAllCategories = () => {
  const { data, isLoading } = useQuery(getAllCategoriesKey, getAllCategories);

  return {
    data,
    isLoading,
  };
};
