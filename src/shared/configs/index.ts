import toggleFlags from "@/shared/constants/toggle.flags";

const configKeyValuepairs = {
  REDUX_DEVTOOL_TOGGLE: process.env.REACT_APP_REDUX_DEVTOOL || toggleFlags.OFF,
  BE_RESOURCE_NAME: process.env.BE_RESOURCE_NAME || "",
};

export default Object.freeze(configKeyValuepairs);
