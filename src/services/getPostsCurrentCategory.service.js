import { appURL } from "../util/appURL";
import axios from "axios";

export const getPostsCurrentCategory = async ({ queryKey }) => {
  const res = await axios.get(
    `${appURL}/posts?categories=${queryKey[1]}&_limit=10&_start=${queryKey[2]}`
  );
  return res?.data;
};
