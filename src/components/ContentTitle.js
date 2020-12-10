import React, { Component } from "react";

class ContentTitle extends Component {
  render() {
    return <div className={"elementName"} style={{fontSize: 20, paddingBottom: 20, textAlign: "center"}}>{this.props.children}</div>;
  }
}
export default ContentTitle;
