import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import ResturantMenu from "./components/ResturantMenu";

const AppRender = () => {
  return (
    <div>
      <Header />
      <ResturantMenu />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppRender />);
