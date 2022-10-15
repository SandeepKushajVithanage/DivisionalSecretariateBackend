import Axios from ".";
import { Urls } from "../constants";

export const getAllSubDivisions = () => {
  return Axios.get(Urls.AREA);
};
