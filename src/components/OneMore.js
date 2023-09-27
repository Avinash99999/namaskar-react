import React from "react";

class OneMore extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor", props.name)

    this.state = {
        value1: 5,
        value2: 10
    }
  }

  componentDidMount(){
    console.log("child CDM", this.props.name)
  }

  componentWillUnmount(){
    console.log("Parent Unmount", this.props.name)
  }

  render() {
    console.log("Child Render", this.props.name)
    return (
      <div>
        <h1>Class Component</h1>
        <h1>name :{this.props.name}</h1>
        <h1>job: {this.props.job}</h1>
        <h1>age: {this.props.age}</h1>
        <h1>location: {this.props.location}</h1>
        <h1>{this.state.value1}</h1>
        <button onClick={() => {this.setState({value1: this.state.value1 + 1})}}>Increase</button>
        <button onClick={() => {this.setState({value1: this.state.value1 - 1})}}>Decrease</button>
      </div>
    );
  }
}

export default OneMore;
