import mainServiceAuthedV1Client from "@/shared/utils/https.clients";

export function fetch__Name__List() {
  return mainServiceAuthedV1Client.get("/");
}

export default fetch__Name__List;
