import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import './index.css'
import { store } from './Redux/store.ts'
import router from "./route/Router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <Toaster position="top-center" />  */}
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
