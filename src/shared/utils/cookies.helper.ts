const isBrowser = () => typeof window !== "undefined";

export function stringifyOptions(options) {
  return Object.keys(options).reduce((acc, key) => {
    if (key === "days") {
      return acc;
    } else {
      if (options[key] === false) {
        return acc;
      } else if (options[key] === true) {
        return `${acc}; ${key}`;
      } else {
        return `${acc}; ${key}=${options[key]}`;
      }
    }
  }, "");
}

export function readCookie(name, initialValue = "") {
  return (
    (isBrowser() &&
      document.cookie.split("; ").reduce((r, v) => {
        const parts = v.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, "")) ||
    initialValue
  );
}

export function setCookie(name, value, options = { days: 30 }) {
  if (!isBrowser()) return;

  const { days, ...cookieOptions } = options;
  const optionsWithDefaults = {
    path: "/",
    ...cookieOptions,
  };

  const expires = new Date(Date.now() + days * 864e5).toUTCString();

  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    stringifyOptions(optionsWithDefaults);
}

export function deleteCookie(name) {
  if (!isBrowser()) return;

  const optionsWithDefaults = {
    path: "/",
  };

  const expires = new Date(Date.now() - 1 * 864e5).toUTCString();

  document.cookie =
    name + "=" + "; expires=" + expires + stringifyOptions(optionsWithDefaults);
}
