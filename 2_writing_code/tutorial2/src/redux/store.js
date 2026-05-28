import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

// configureStore() is used to create the Redux store.
//
// Redux store = central place where complete application state is stored.
//
// Redux Toolkit recommends using configureStore()
// because it:
// - simplifies store setup
// - automatically enables Redux DevTools
// - automatically adds middleware
// - provides better default configuration

export const store = configureStore({
  // reducer object contains all reducers/slices of the application
  //
  // Structure:
  // key -> slice name in global state
  // value -> corresponding reducer
  //
  // Final Redux state will look like:
  //
  // {
  //    counter: {
  //       value: ...
  //    }
  // }
  //
  // "counter" becomes the state key
  // and counterReducer manages that part of the state

  reducer: {
    counter: counterReducer,
  },
});
