import toggleFlags from "@/shared/constants/toggle.flags";

const configKeyValuepairs = {
  REDUX_DEVTOOL_TOGGLE:
    import.meta.env.REACT_APP_REDUX_DEVTOOL || toggleFlags.OFF,
  BE_RESOURCE_NAME: import.meta.env.REACT_APP_BE_RESOURCE_NAME || "",
};

export default Object.freeze(configKeyValuepairs);
