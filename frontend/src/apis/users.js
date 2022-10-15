import Axios from ".";
import { Urls } from "../constants";

export const getAllUsers = () => {
  return Axios.get(Urls.USER);
};
