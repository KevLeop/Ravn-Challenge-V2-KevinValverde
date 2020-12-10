import React, { Component } from "react";

const SCREEN_WIDTH = "1440px";
class NavBar extends Component {
  NavBarStyle() {
    return {
      width: SCREEN_WIDTH,
      height: "52px",
      left: "0px",
      top: "0px",
      background: "#121212",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
      display: "flex",
      paddingLeft: "33px",
    };
  }
  TextNavBar() {
    return {
      color: "#fff",
      display: "flex",
    };
  }

  render() {
    return (
      <nav style={this.NavBarStyle()}>
        <p style={this.TextNavBar()}>Ravn Star Wars Registry</p>
      </nav>
    );
  }
}
export default NavBar;
