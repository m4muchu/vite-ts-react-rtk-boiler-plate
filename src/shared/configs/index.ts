import toggleFlags from "@/shared/constants/toggle.flags";

const configKeyValuepairs = {
  REDUX_DEVTOOL_TOGGLE: process.env.REACT_APP_REDUX_DEVTOOL || toggleFlags.OFF,
  BASE_DOMAIN: process.env.REACT_APP_BASE_DOMAIN || "",
};

export default Object.freeze(configKeyValuepairs);
