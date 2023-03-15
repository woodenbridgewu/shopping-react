import { React } from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

function ProfileRoot({ user, setUser }) {
  return (
    <>
      {!user && <LoginForm />}
      {user && <Profile />}
    </>
  );
}

export default ProfileRoot;
