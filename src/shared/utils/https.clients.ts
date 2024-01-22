import axios from "axios";
import { mainServiceV1BaseURL } from "@/shared/configs/base-url.config";

export const mainServiceAuthedV1Client = axios.create({
  baseURL: mainServiceV1BaseURL,
  withCredentials: true,
});

export default mainServiceAuthedV1Client;
