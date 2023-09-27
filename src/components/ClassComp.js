import React from "react";
import OneMore from "./OneMore";

class ClassComp extends React.Component {

    constructor(props){
        super(props)

        console.log("Parent constructor")
    }

    componentDidMount(){
      console.log("Parent CDM")
    }

    componentWillUnmount(){
      console.log("Parent Unmount")
    }
  render() {
    console.log("Parent Render")
    return (
      <div>
        <OneMore name={"Avinash Patil"} age={26} location={"Vasai"} job={"MERN Stack Developer"}/>
        <OneMore name={"Shubhangi Patil"} age={27} location={"Israel"} job={"Micro Biologiest"}/>
      </div>
    );
  }
}

export default ClassComp;

//Parent constructor
//Parent Render
//Child constructor Avinash Patil
//Child Render Avinash Patil
//Child constructor Shubhangi Patil
//Child Render Shubhangi Patil
//cdm Avinash Patil
//cdm Shubhangi Patil
//cdm Parent

//unmount Avinash Patil
//Unmount Shubhangi Patil
//Unmount Parent