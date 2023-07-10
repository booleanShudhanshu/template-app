import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import initState from "./initialState/index";
import authSlice from "./slices/authSlice";
import localforage from "localforage";

const combinedReducer = combineReducers({
  auth: authSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logout") {
    state = initState;
  }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(
  { key: "redux", storage: localforage },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
