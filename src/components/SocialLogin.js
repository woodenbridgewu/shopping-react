import { React } from "react";
import { auth, provider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
function SocialLogin(props) {
  function googleLoginHandler(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        localStorage.setItem("email", result.user.email);
      })
      .then(() => {
        return props.login();
      });
  }

  return (
    <>
      <button type="submit" onClick={googleLoginHandler}>
        Google 登入
      </button>
    </>
  );
}

export default SocialLogin;
