import React from "react";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Profile from "./pages/Profile";
import SingleProfile from "./pages/SingleProfile";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "me",
        element: <MyProfile />,
      },
      {
        path: ":id",
        element: <SingleProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
