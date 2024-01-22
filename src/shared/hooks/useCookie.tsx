import React, { useCallback, useState } from "react";
import { readCookie, setCookie } from "@/shared/utils/cookies.helper";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***data(redux) imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

/* ***local declarations above this***  */

export default function useCookie(
  key: string,
  initialValue: any
): [string, any] {
  const [item, setItem] = useState(() => {
    return readCookie(key, initialValue);
  });

  const updateItem = useCallback(
    (value, options) => {
      setItem(value);
      setCookie(key, value, options);
    },
    [key]
  );

  return [item, updateItem];
}
