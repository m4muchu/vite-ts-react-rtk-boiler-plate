import axios from "axios";
import { mainServiceV1BaseURL } from "@/shared/configs/base-url.config";
import configs from "../configs";

export const mainServiceAuthedV1Client = axios.create({
  baseURL: mainServiceV1BaseURL,
  withCredentials: true,
  headers:{
    "Content-Type": "application/json",
    "Authorization": configs.BE_AUTH_TOKEN,
  }
});

export default mainServiceAuthedV1Client;
