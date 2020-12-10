import React from "react";
import "./../App.css";

const ElementSideBar = (props) => {
  return (
    <div>
      <div className="elementName">{props.name}</div>
      <div>
        <p className="elementDetail">
          <span>{props.species !== null ? props.species.name : "Human"}</span>
          {" from "}
          <span>{props.homeworld.name}</span>
        </p>
      </div>
    </div>
  );
};
export default ElementSideBar;
