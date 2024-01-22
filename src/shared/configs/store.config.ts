import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import configs from "./index";
import toggleFlags from "@/shared/constants/toggle.flags";
import AuthSliceReducer from "@/modules/auth/auth.data";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: true }).concat([]);
  },
  devTools: configs.REDUX_DEVTOOL_TOGGLE === toggleFlags.ON,
});

export type TRootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export default store;
