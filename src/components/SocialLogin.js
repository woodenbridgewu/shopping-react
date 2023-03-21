import { React } from "react";
import { auth, provider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import classes from "./SocialLogin.module.css";

function SocialLogin() {
  function googleLoginHandler(e) {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // localStorage.setItem("email", result.user.email);
    });
  }

  return (
    <>
      {/* <button type="submit" onClick={googleLoginHandler}>
        Google 登入
      </button> */}
      <div className={classes.container}>
        {" "}
        <button className={classes.google_btn} onClick={googleLoginHandler}>
          <div className={classes.google_icon_wrapper}>
            <img
              className={classes.google_icon}
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google"
            />
          </div>
          <p className={classes.btn_text}>
            <b>Sign in with Google</b>
          </p>
        </button>
      </div>
    </>
  );
}

export default SocialLogin;
