import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import ResturantMenu from "./components/ResturantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantDetails from "./components/ResturantDetails";
import ClassComp from "./components/ClassComp";

const AppRender = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppRender />,
    children: [
      {
        path: "/",
        element: <ResturantMenu />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resturant/:resid",
        element: <ResturantDetails />
      },
      {
        path: "/class",
        element: <ClassComp />
      }
    ],
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppRender />);
root.render(<RouterProvider router={appRouting}/>);