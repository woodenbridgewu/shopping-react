import React, { useState } from "react";
import SocialLogin from "../components/SocialLogin";
import styles from "./LoginForm.module.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // 在這裡處理登入邏輯
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // 在這裡處理註冊邏輯
  };

  return (
    <form className={styles["login-form"]}>
      <h2 className={styles.h2}>登入</h2>
      <div className={styles["form-group"]}>
        <label htmlFor="email">電子郵件：</label>
        <input
          type="email"
          id="email"
          placeholder="xxxxxxxx@gmail.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="password">密碼：</label>
        <input
          type="password"
          id="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className={styles["button-container"]}>
        <button
          type="submit"
          className={styles["login-button"]}
          onClick={handleLogin}
        >
          登入
        </button>
        <button
          type="submit"
          className={styles["signup-button"]}
          onClick={handleSignup}
        >
          註冊
        </button>
      </div>
      <hr />
      <SocialLogin />
    </form>
  );
}

export default LoginForm;
