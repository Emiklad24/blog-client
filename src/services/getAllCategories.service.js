import { appURL } from "../util/appURL";
import axios from "axios";

export const getAllCategories = async () => {
  const res = await axios.get(`${appURL}/categories`);
  return res?.data;
};
