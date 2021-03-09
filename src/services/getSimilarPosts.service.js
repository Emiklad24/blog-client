import { appURL } from "../util/appURL";
import qs from "qs";
import axios from "axios";

export const getSimilarPosts = async ({ queryKey }) => {
  const query = qs.stringify({
    _where: { _or: [{ authors: queryKey[1] }, { categories: queryKey[2] }] },
  });

  const res = await axios.get(`${appURL}/posts?_limit=5&${query}`);
  return res?.data;
};
