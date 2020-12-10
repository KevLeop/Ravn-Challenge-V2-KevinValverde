import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
// import NavBar from './components/NavBar'
import SideBar from "./components/SideBar";
import ContentTitle from "./components/ContentTitle";
// import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onClickFunction = (e, childData) => {
    this.setState({ message: childData });
    console.log("childData");
    console.log(childData);
  };
  render() {
    return (
      <div className="container">
        <NavBar />
        <SideBar onSelected={(e, id) => this.onClickFunction(e, id)} />
        <ContentTitle></ContentTitle>
      </div>
    );
  }
}

export default App;
