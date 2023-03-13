import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Options from "../components/Options";

function Root(props) {
  console.log(props);
  return (
    <>
      <Container>
        <Navbar user={props.user} />
        <Logo />
        <Options />
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
