import { React } from "react";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

function ProfileRoot(props) {
  // console.log(props.user);
  return (
    <>
      {!props.user && <LoginForm />}
      {props.user && <Profile />}
    </>
  );
}

export default ProfileRoot;
