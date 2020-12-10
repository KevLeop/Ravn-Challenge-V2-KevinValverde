import React from "react";

const ContentInfo = (props) => {
  if (props.children !== undefined) {
    return (
      <div>
        <p >{props.children}</p>
      </div>
    );
  } else {
    return (
      <div style={{display: 'flex'}}>
        <div className={"elementName"} style={{paddingBottom: 15, display: 'flex', paddingRight: 5}}>{props.info}</div>
        <div>{props.value}</div>
      </div>
    );
  }
};
export default ContentInfo;
