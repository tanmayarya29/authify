import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/app/store.ts";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
