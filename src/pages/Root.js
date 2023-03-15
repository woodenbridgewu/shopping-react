import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Options from "../components/Options";

function Root({ user, setUser }) {
  // console.log(props);
  return (
    <>
      <Container>
        <Navbar user={user} setUser={setUser} />
        <Logo />
        <Options />
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
