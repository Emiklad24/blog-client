import { appURL } from "../util/appURL";
import axios from "axios";

export const getAllPosts = async ({ queryKey }) => {
  const limit = queryKey[1] ? `?_limit=${queryKey[1]}` : "";
  const res = await axios.get(`${appURL}/posts${limit}`);
  return res?.data;
};
