const PRODUCTION_BASE_URL = "https://divisional-secretariat.herokuapp.com/";
const DEVELOPMENT_BASE_URL = "http://localhost:8000/";

const BASE_URI = DEVELOPMENT_BASE_URL;

const Urls = {
  BASE_URI: BASE_URI,
  FILE_STORAGE: BASE_URI.substring(0, BASE_URI.length - 1),
  CURRENT_USER: "api/me",
  NEWS: "api/news",
  AREA: "api/area",
  USER: "api/user",
  CHAT: "api/chat",
};

export default Urls;
