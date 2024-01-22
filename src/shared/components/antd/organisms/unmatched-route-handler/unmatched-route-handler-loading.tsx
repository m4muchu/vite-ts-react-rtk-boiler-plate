import React from "react";
import { Skeleton } from "antd";
/* ***package imports above this***  */

/* ***components imports above this***  */

/* ***libs, utils, custom-hooks imports above this***  */

/* ***data(redux) imports above this***  */

/* ***configs imports above this***  */

/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

import classes from "./unmatched-route-handler.module.css";
/* ***style and styled components imports above this***  */

interface IUnmatchedRouteHandlerLoadingProps {}

/* ***local declarations above this***  */

export default function UnmatchedRouteHandlerLoading(
  props: IUnmatchedRouteHandlerLoadingProps
) {
  /* ***props decustructions above this***  */

  /* ***data selectors above this***  */

  /* ***hooks initializations above this***  */

  /* ***state initializations above this***  */

  /* ***side effects definitions above this***  */

  /* ***memoised functions initializations above this***  */

  /* ***memoised variables initializations above this***  */

  /* ***internal declarations, if necessary, above this***  */

  /* ***conditional renderings above this***  */
  return (
    <div className={classes['UnmatchedRouteHandlerLoading-container']}>
      <Skeleton paragraph={{ rows: 10 }} style={{ marginTop: 50 }} />
    </div>
  );
}

UnmatchedRouteHandlerLoading.defaultProps = {};
