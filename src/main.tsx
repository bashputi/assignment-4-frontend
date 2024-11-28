
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import './index.css'
import { store } from './redux/store.js'
import router from "./route/Router.js";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
