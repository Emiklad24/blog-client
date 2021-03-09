import { appURL } from "../util/appURL";
import qs from "qs";
import axios from "axios";

export const getSinglePost = async ({ queryKey }) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { _id: queryKey[2] },
        { title: queryKey[3] },
        { slug: queryKey[1] },
        { slug_contains: queryKey[1] },
      ],
    },
  });
  const res = await axios.get(`${appURL}/posts?_limit=1&${query}`);
  return res?.data;
};
