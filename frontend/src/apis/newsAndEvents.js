import Axios from ".";
import { Urls } from "../constants";

export const getAllNews = () => {
  return Axios.get(Urls.NEWS);
};
