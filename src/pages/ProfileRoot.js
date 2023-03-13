import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/User";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

function ProfileRoot() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function login() {
    setIsLoggedIn(true);
    dispatch(setCurrentUser());
  }
  return (
    <>
      {!isLoggedIn && <LoginForm login={login} />}
      {isLoggedIn && <Profile />}
    </>
  );
}

export default ProfileRoot;
