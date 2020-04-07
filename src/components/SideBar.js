import React from "react";

const SiderBar = (props) => {
  return [
    <div
      style={{
        width: "20px",
        height: "4px",
        color: "green",
      }}
    >
      <ul>
        <li>{props.food} </li>
      </ul>
    </div>,
  ];
};

export default SiderBar;
