import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { Main } from "./Usecontext/Main";
import { Apps } from "./UseEffect/Apps";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <App />
    ),
  },
  {
    path: "/hooks",
    element: (
     <Main />
    ),
  },
  {
    path: "/effect",
    element: (
     <Apps />
    ),
  },
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);