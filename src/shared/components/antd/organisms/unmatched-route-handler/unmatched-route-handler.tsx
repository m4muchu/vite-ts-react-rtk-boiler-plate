// import React, { useMemo } from "react";
// import { isEmpty } from "lodash-es";
// import { Navigate } from "react-router-dom";
// /* ***package imports above this***  */

// import UnmatchedRouteHandlerLoading from "./unmatched-route-handler-loading";
// /* ***components imports above this***  */

// import { useAppSelector } from "@/modules/shared/configs/store.config";
// import { getLandingScreenRouteForSignedInUser } from "@/modules/auth/auth.utils";
// /* ***libs, utils, custom-hooks imports above this***  */

// import {
//   selectFetchUserDetailsLoading,
//   selectedUserDetails,
// } from "@/modules/auth/auth.selector";
// /* ***data(redux) imports above this***  */

// /* ***configs imports above this***  */

// import { LoginRouteObject } from "@/modules/auth";
// /* ***enums, consts imports above this***  */

// /* ***types imports above this***  */

// /* ***style and styled components imports above this***  */

// interface IUnmatchedRouteHandlerProps {}

// /* ***local declarations above this***  */

// export default function UnmatchedRouteHandler(
//   props: IUnmatchedRouteHandlerProps
// ) {
//   /* ***props decustructions above this***  */
//   const userDetails = useAppSelector(selectedUserDetails);
//   const isUserDetailsLoading = useAppSelector(selectFetchUserDetailsLoading);
//   /* ***data selectors above this***  */

//   /* ***hooks initializations above this***  */

//   /* ***state initializations above this***  */

//   /* ***side effects definitions above this***  */

//   /* ***memoised functions initializations above this***  */

//   //NOTE: finding the default "Homepage route" for the current user
//   const landingRoute = useMemo(() => {
//     if (!isUserDetailsLoading && userDetails && !isEmpty(userDetails)) {
//       const { landingScreenRoute } = getLandingScreenRouteForSignedInUser(userDetails);
//       return landingScreenRoute;
//     } else {
//       return LoginRouteObject.routePath;
//     }
//   }, [userDetails, isUserDetailsLoading]);

//   /* ***memoised variables initializations above this***  */

//   /* ***internal declarations, if necessary, above this***  */

//   if (isUserDetailsLoading) {
//     return <UnmatchedRouteHandlerLoading />;
//   }
//   /* ***conditional renderings above this***  */

//   return <Navigate replace to={landingRoute} />;
// }

// UnmatchedRouteHandler.defaultProps = {};
