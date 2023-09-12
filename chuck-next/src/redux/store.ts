import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./jokeSlice";

const rootReducer = combineReducers({
  jokeReducer: jokeSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
