import Axios from "."
import { Urls } from "../constants"

export const getCurrentUserApi = data => {
    return Axios.get(Urls.CURRENT_USER)
}