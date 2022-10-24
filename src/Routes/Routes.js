import React, { Children } from "react";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login/Login";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blog/Blogs";
import Contact from "../Pages/Contact/Contact";
import Destination from "../Pages/Destination/Destination";
import News from "../Pages/News/News";

const Routes = [
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () => {
          return fetch(
            "https://trave-kavel-server-motiurrahman.vercel.app/place"
          );
        },
        element: <Home></Home>,
      },
      { path: "news", element: <News></News> },
      { path: "destination", element: <Destination></Destination> },
      { path: "blog", element: <Blogs></Blogs> },
      { path: "contact", element: <Contact></Contact> },
      { path: "login", element: <Login></Login> },
    ],
  },
];

export default Routes;
