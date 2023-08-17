import React, { useState } from "react";
import { MenuStyle, UnorderList, ListItem } from "../components/HomePageStyle";

const MenuIcon = () => {
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => {
    console.log(!isListVisible);
    setListVisible(!isListVisible);
  };

  return (
    <div>
      <MenuStyle
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="16"
        onClick={toggleListVisibility}
      >
        <g fill="#242942" fillRule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </MenuStyle>
      <UnorderList isVisible={isListVisible}>
        <ListItem>Name</ListItem>
        <ListItem>Email</ListItem>
        <ListItem>Phone</ListItem>
      </UnorderList>
    </div>
  );
};

export default MenuIcon;
