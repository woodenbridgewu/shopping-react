import { React, useState } from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

function ProfileRoot() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function login() {
    setIsLoggedIn(true);
  }
  return (
    <>
      {!isLoggedIn && <LoginForm login={login} />}
      {isLoggedIn && <Profile />}
    </>
  );
}

export default ProfileRoot;
