import axios from "axios";
import { Keys, Urls } from "../constants";
import { getValue } from "../utils/localStorage";

const Axios = axios.create({
  baseURL: Urls.BASE_URI,
});

Axios.interceptors.request.use(
  async (request) => {
    const accessToken = await getValue(Keys.ACCESS_TOKEN);
    if (!request.headers.Authorization && accessToken !== null) {
      request.headers.Authorization = accessToken;
    }
    return request;
  },
  (error) => {
    if (error.response.status === 401) {
      alert("Token Expired, Please logout and login again");
    }
    return Promise.reject(error);
  }
);

export default Axios;
