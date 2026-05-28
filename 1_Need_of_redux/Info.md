# Redux and Redux Toolkit Notes

# 1. What is Redux?

Redux is a state management library used mainly with React applications.

It helps us manage and share application data (state) between different components in a predictable way.

Redux stores all the application state in a single centralized store.

---

# 2. Why Do We Need Redux?

In React:

- Data is usually passed from parent to child using props.
- When the application becomes large:
  - Passing props through many components becomes difficult.
  - Managing shared data becomes messy.
  - State synchronization becomes hard.

This problem is called:

> Prop Drilling

Redux solves this by storing shared data in one global place.

Any component can access or update the state without passing props manually.

---

# 3. What is State?

State means:

> Data that changes over time in an application.

Examples:
- User information
- Cart items
- Theme (dark/light)
- Authentication status
- Notifications
- API data

Example:
```js
const state = {
  count: 0
}
```

---

# 4. Core Concepts of Redux

Redux mainly has 5 important concepts:

1. Store
2. Action
3. Reducer
4. Dispatch
5. Subscribe

---

# 5. Store

The store is the central container that holds the entire application state.

Example:
```js
{
  user: {},
  cart: [],
  theme: "dark"
}
```

There is usually only one Redux store in an application.

---

# 6. Action

An action is a plain JavaScript object that describes:

> "What happened?"

It must contain a `type`.

Example:
```js
{
  type: "INCREMENT"
}
```

Another example:
```js
{
  type: "ADD_TODO",
  payload: "Learn Redux"
}
```

- `type` → describes the action
- `payload` → optional data sent with action

---

# 7. Reducer

A reducer is a function that decides:

> How the state should change.

Syntax:
```js
(state, action) => newState
```

Example:
```js
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1

    case "DECREMENT":
      return state - 1

    default:
      return state
  }
}
```

Important:
- Reducers must be pure functions
- They should NOT:
  - modify original state
  - call APIs
  - use random values
  - use async code

---

# 8. Dispatch

Dispatch is used to send actions to Redux.

Example:
```js
dispatch({ type: "INCREMENT" })
```

Flow:
```text
dispatch(action) → reducer → updated state
```

---

# 9. Subscribe

Subscribe listens for state changes.

Example:
```js
store.subscribe(() => {
  console.log(store.getState())
})
```

Whenever state changes, subscriber runs.

---

# 10. Redux Data Flow

Redux follows a strict one-way data flow.

Flow:

```text
UI → dispatch(action) → reducer → store updated → UI re-renders
```

---

# 11. Problems with Traditional Redux

Redux is powerful but traditional Redux has problems:

- Too much boilerplate code
- Many files needed
- Complex setup
- Writing action types manually
- Writing reducers manually
- Immutable updates are difficult

---

# 12. What is Redux Toolkit (RTK)?

Redux Toolkit is the official recommended way to write Redux.

It simplifies Redux development.

Official Redux team created RTK to reduce boilerplate.

---

# 13. Why Redux Toolkit?

Redux Toolkit solves Redux problems by:

- Reducing boilerplate
- Simplifying store setup
- Simplifying reducers
- Providing built-in Immer support
- Providing Redux DevTools support
- Simplifying async logic

---

# 14. Installing Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

---

# 15. Important RTK Functions

Main functions in Redux Toolkit:

1. `configureStore()`
2. `createSlice()`
3. `createAsyncThunk()`
4. `createReducer()`
5. `createAction()`

---

# 16. configureStore()

Used to create Redux store.

Example:
```js
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {}
})
```

Benefits:
- Automatically adds Redux DevTools
- Automatically adds middleware
- Easier configuration

---

# 17. createSlice()

The most important RTK feature.

A slice contains:
- state
- reducers
- actions

All together in one place.

Example:
```js
import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
```

---

# 18. What Happens Inside createSlice?

RTK automatically:
- Creates action types
- Creates action creators
- Creates reducer

You write less code.

---

# 19. Understanding initialState

Initial state is the default state value.

Example:
```js
initialState: {
  users: [],
  loading: false
}
```

---

# 20. Mutating State in RTK

In Redux Toolkit we write:

```js
state.value += 1
```

Looks like mutation but actually is NOT.

RTK uses Immer internally.

---

# 21. Connecting Redux to React

Wrap app with Provider.

Example:
```js
import { Provider } from "react-redux"
import store from "./store"

<Provider store={store}>
  <App />
</Provider>
```

---

# 22. useSelector()

Used to read data from Redux store.

Example:
```js
const count = useSelector((state) => state.counter.value)
```

---

# 23. useDispatch()

Used to dispatch actions.

Example:
```js
dispatch(increment())
```

---

# 24. createAsyncThunk()

Used for async logic.

Example:
```js
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://api.com/users")
    return response.json()
  }
)
```

---

# 25. Async States

Usually async operations have 3 states:

1. Pending
2. Fulfilled
3. Rejected

---

# 26. extraReducers

Used to handle async actions.

Example:
```js
extraReducers: (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })

    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })
}
```

---

# 27. Redux Middleware

Middleware sits between:

```text
dispatch(action) → reducer
```

Used for:
- Logging
- API calls
- Async tasks
- Error handling

---

# 28. Redux DevTools

Redux DevTools help:
- Track actions
- Debug state changes
- Monitor store updates

---

# 29. Folder Structure

```text
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── counter/
│       ├── counterSlice.js
│       └── Counter.jsx
```

---

# 30. Advantages of Redux Toolkit

- Less code
- Easier to learn
- Better readability
- Built-in best practices
- Easy async handling
- Better debugging
- Scalable

---

# 31. Redux vs Context API

| Redux | Context API |
|---|---|
| Good for large apps | Good for small apps |
| Better debugging | Limited debugging |
| Middleware support | No middleware |
| Predictable updates | Can cause re-renders |
| Centralized state | Simpler setup |

---

# 32. Final Summary

Redux:
- Centralized state management library

Redux Toolkit:
- Official easier way to write Redux

Main Flow:
```text
Component → Dispatch Action → Reducer → Store Updated → UI Updated
```
