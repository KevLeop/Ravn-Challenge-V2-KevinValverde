import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onClickFunction = (e, childData) => {
    this.setState({ message: childData });
  };
  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="container2">
          <SideBar onSelected={(e, id) => this.onClickFunction(e, id)} />
          <Content personID={this.state.message} />
        </div>
      </div>
    );
  }
}

export default App;
