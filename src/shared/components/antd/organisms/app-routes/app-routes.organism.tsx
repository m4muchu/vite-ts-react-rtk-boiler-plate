import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

/* ***package imports above this***  */

/* ***components imports above this***  */

import { useAppDispatch } from "@/shared/configs/store.config";
/* ***libs, utils, custom-hooks imports above this***  */

// import { fetchUserDetails } from "@/auth/auth.data";
import UnmatchedRouteHandler from "../unmatched-route-handler";
import Test from "./test";
/* ***data(redux) imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface IAppRoutesOrganismProps {}

/* ***local declarations above this***  */

export default function AppRoutesOrganism(props: IAppRoutesOrganismProps) {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserDetails());
  // }, []);

  return (
    <Routes>
      <Route key={"key"} path={"/test"} Component={Test} />
      {/* <Route
        key={"unmatched-router-handler"}
        path="*"
        element={UnmatchedRouteHandler}
      /> */}
    </Routes>
  );
}

AppRoutesOrganism.defaultProps = {};
