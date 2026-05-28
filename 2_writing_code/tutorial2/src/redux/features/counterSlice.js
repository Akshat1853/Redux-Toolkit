import { createSlice } from "@reduxjs/toolkit";

// createSlice() is the most important function in Redux Toolkit.
//
// It combines:
// - state
// - reducers
// - action creators
//
// into one single structure.
//
// This reduces boilerplate code significantly compared to traditional Redux.

export const counterSlice = createSlice({
  // name is used internally by Redux Toolkit
  //
  // It helps generate action types automatically.
  //
  // Example generated action types:
  // "counter/increment"
  // "counter/decrement"

  name: "counter",

  // initialState defines the default state of this slice
  //
  // This state becomes:
  //
  // state.counter
  //
  // inside the global Redux store because
  // we registered this reducer with key "counter"
  // in store.js

  initialState: {
    value: 0,
  },

  // reducers contain functions that modify state
  //
  // Each reducer function:
  // - receives current state
  // - updates state
  // - automatically generates an action creator
  //
  // Redux Toolkit uses Immer internally,
  // so mutable-looking code is safely converted
  // into immutable updates.

  reducers: {
    // increment action
    //
    // Updates:
    // value = value + 1

    increment: (state) => {
      state.value += 1;
    },

    // decrement action
    //
    // Updates:
    // value = value - 1

    decrement: (state) => {
      state.value -= 1;
    },

    // incrementByAmount action
    //
    // payload contains extra data sent with action
    //
    // Example:
    // dispatch(incrementByAmount(5))
    //
    // Here:
    // action.payload = 5

    incrementByAmount: (state, actions) => {
      // payload stores dynamic value passed during dispatch

      state.value += actions.payload;
    },
  },
});

// createSlice automatically generates action creators
//
// We export them so components can dispatch actions.
//
// Example:
// dispatch(increment())
// dispatch(decrement())
// dispatch(incrementByAmount(10))

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exporting reducer so it can be added to Redux store

export default counterSlice.reducer;
