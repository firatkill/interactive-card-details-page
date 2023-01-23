import React from "react";
import LeftSideComponentCSS from "./LeftSideComponent.module.css";

function LeftSideComponent() {
  const styled = LeftSideComponentCSS;
  return <div className={styled.container}>LeftSideContainer</div>;
}

export default LeftSideComponent;
