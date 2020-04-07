import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import faker from "faker";

const App = () => {
  return [
    <div
      style={{
        paddingTop: "50px",
      }}
    >
      <SideBar food="rice" />
      <SideBar food="pizza" />
      <SideBar food="potato" />
    </div>,
    <div>
      <Body image={faker.image.avatar()} />
    </div>,
  ];
};

export default App;
