import { appURL } from "../util/appURL";
import axios from "axios";

export const getAllFeaturedPosts = async () => {
  const res = await axios.get(`${appURL}/posts?isFeatured=true`);
  return res?.data;
};
