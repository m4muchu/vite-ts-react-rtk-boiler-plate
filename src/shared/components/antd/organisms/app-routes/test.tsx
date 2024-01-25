import mainServiceAuthedV1Client from "@/shared/utils/https.clients";
import { useEffect } from "react";

export default function Test() {

  useEffect(() => {
    mainServiceAuthedV1Client.get('/contents')
    .then(console.log)
    .catch(console.error)
  }, [])

  return (
    <div>
      test 123
    </div>
  );
}