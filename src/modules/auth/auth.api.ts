import mainServiceAuthedV1Client from "@/shared/utils/https.clients";

export function fetchAuthList() {
  return mainServiceAuthedV1Client.get("/");
}

export default fetchAuthList;
