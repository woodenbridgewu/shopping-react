import { signOut } from "firebase/auth";
import { React } from "react";
import { auth } from "../components/FirebaseConfig";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

function ProfileRoot({ user, setUser }) {
  console.log(setUser);
  function logoutHandler() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
      {!user && <LoginForm />}
      {user && <Profile />}
      <button onClick={logoutHandler}>登出</button>
    </>
  );
}

export default ProfileRoot;
