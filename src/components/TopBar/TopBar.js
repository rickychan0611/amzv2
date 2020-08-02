import React, { useContext } from "react";
import styled from "styled-components";
import { Title, Wrapper } from "./TopBarStyles.js";
import { UserContext } from "../../context/UserContext.js";
import {
  Menu,
  Dropdown,
  Responsive,
  Image,
  Button,
  Sidebar,
  Icon,
  Segment,
  Grid,
} from "semantic-ui-react";

const TopBar = () => {
  const { signOut, openSideBar, setOpenSideBar } = useContext(UserContext);
  return (
    <>
      <div
        style={{
          position:"absolute",
          marginLeft: 5,
          marginTop:9
        }}
      >
        <Icon
          name="bars"
          size="large"
          style={{ color: "white" }}
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
        />
      </div>
      <Title>amz-club</Title>
    </>
  );
};

export default TopBar;
