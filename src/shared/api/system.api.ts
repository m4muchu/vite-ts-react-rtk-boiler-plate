import mainServiceAuthedV1Client from "@/shared/utils/https.clients";
import {
  IPersistLocalePayload,
  IPersistLocaleResponse,
} from "@/shared/types/system.type";

export function setUserSystemPreference(
  userSystemPreference: IPersistLocalePayload
) {
  return mainServiceAuthedV1Client.post<IPersistLocaleResponse>(
    "/user/profile",
    userSystemPreference
  );
}
