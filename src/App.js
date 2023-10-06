import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import ResturantMenu from "./components/ResturantMenu";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantDetails from "./components/ResturantDetails";
import ClassComp from "./components/ClassComp";
import Shimmer from "./components/Shimmer";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

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
        element: <ResturantMenu />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resid",
        element: <ResturantDetails />,
      },
      {
        path: "/class",
        element: <ClassComp />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppRender />);
root.render(<RouterProvider router={appRouting} />);
