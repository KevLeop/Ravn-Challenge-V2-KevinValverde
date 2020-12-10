import React from "react";

const ContentInfo = (props) => {
  if (props.children !== undefined) {
    return (
      <div>
        <p>{props.children}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{props.info}</p>
        <p>{props.value}</p>
      </div>
    );
  }
};
export default ContentInfo;
