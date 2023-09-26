import React from "react";
import OneMore from "./OneMore";

class ClassComp extends React.Component {
  render() {
    return (
      <div>
        <OneMore name={"Avinash Patil"} age={26} location={"Vasai"} job={"MERN Stack Developer"}/>
      </div>
    );
  }
}

export default ClassComp;
