import React from "react";

class OneMore extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>name :{this.props.name}</h1>
        <h1>job: {this.props.job}</h1>
        <h1>age: {this.props.age}</h1>
        <h1>location: {this.props.location}</h1>
      </div>
    );
  }
}

export default OneMore;
