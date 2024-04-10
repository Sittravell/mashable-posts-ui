import axios from "axios";
import ApiUrl from "./api-url";

const client = axios.create({baseURL: ApiUrl})

export default client
