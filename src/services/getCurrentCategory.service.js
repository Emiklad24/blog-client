import { appURL } from "../util/appURL";
import axios from "axios";

export const getCurrentCategory = async ({ queryKey }) => {
  const res = await axios.get(
    `${appURL}/categories?name=${queryKey[1]}&_limit=1`
  );
  return res?.data;
};
