import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  // StrictMode helps detect potential problems during development.
  // It performs additional checks and warnings for safer React code.
  <React.StrictMode>
    {/* 
      Provider connects React application with Redux store.

      Why Provider is needed?
      -----------------------
      Redux store must be accessible throughout the application.
      Provider makes the global Redux state available to all components.

      Because of Provider:
      - useSelector() can access state
      - useDispatch() can dispatch actions
    */}
    <Provider store={store}>
      {/* Root component of the application */}
      <App />
    </Provider>
  </React.StrictMode>,
);
