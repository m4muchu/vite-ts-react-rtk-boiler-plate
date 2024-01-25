import toggleFlags from "@/shared/constants/toggle.flags";

const configKeyValuepairs = {
  REDUX_DEVTOOL_TOGGLE:
    import.meta.env.REACT_APP_REDUX_DEVTOOL || toggleFlags.OFF,
  BE_RESOURCE_NAME: import.meta.env.REACT_APP_BE_RESOURCE_NAME || "",
  BE_AUTH_TOKEN: `bearer ${import.meta.env.REACT_APP_BE_AUTH_TOKEN}`,
};

export default Object.freeze(configKeyValuepairs);
