import React from "react";

const ElementSideBar = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>
        <p>
          <span>{props.species !== null ? props.species.name : "Human"}</span>
          {" from "}
          <span>{props.homeworld.name}</span>
        </p>
      </div>
    </div>
  );
};
export default ElementSideBar;
