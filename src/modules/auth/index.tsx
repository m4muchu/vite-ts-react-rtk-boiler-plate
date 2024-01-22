import { moduleName } from "./auth.enum";
import RouteComponent from "./auth.routes";
export { default as AuthReducer } from "./auth.data";

const linkLabel = "Auth";
const routePath = `/${moduleName}`;
const linkLabelKey = "ADD_I18N_KEY_HERE"; // for layout side nav
const linkKey = `${moduleName}`;

export const AuthRouteObject = {
  routePath,
  linkLabel,
  linkLabelKey,
  linkKey,
};

export default RouteComponent;
