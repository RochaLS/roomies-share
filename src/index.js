import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Settings } from "./pages/Settings";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Me } from "./pages/Me";
import { Group } from "./pages/Group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/group",
    element: <Group />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
