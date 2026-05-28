import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  // useDispatch() gives access to Redux dispatch function
  //
  // dispatch is used to send actions to Redux store.
  //
  // Flow:
  // dispatch(action) → reducer runs → state updates

  const dispatch = useDispatch();

  // useSelector() is used to read data from Redux store
  //
  // state = complete global Redux state
  //
  // state.counter
  // comes from:
  //
  // reducer: {
  //    counter: counterReducer
  // }
  //
  // .value comes from initialState:
  //
  // initialState: {
  //    value: 0
  // }

  const count = useSelector((state) => state.counter.value);

  // Local React state
  //
  // Used for storing input field value temporarily.
  //
  // This is NOT Redux state because:
  // - this data is only needed inside App component
  // - no other component needs it
  //
  // Important Redux Concept:
  // -------------------------
  // Not every state should go into Redux.
  //
  // Use local state for:
  // - form inputs
  // - modal toggles
  // - temporary UI state
  //
  // Use Redux for:
  // - global shared state

  const [num, setNum] = useState();

  return (
    <div>
      {/* Displaying Redux state */}
      <h1>{count}</h1>

      {/* 
        dispatch(increment())

        increment() creates action object.

        Generated action internally looks like:
        {
          type: "counter/increment"
        }

        Reducer receives this action
        and updates state.
      */}

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>

      {/* Dispatching decrement action */}

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      {/* 
        Input field for dynamic increment value

        e.target.value always returns string.
      */}

      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      {/* 
        incrementByAmount(Number(num))

        Payload passed:
        Number(num)

        Example:
        dispatch(incrementByAmount(5))

        Generated action internally:
        {
          type: "counter/incrementByAmount",
          payload: 5
        }
      */}

      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increase By Amount
      </button>
    </div>
  );
};

export default App;
