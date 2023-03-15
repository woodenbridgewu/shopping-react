import React from "react";
import { auth } from "../components/FirebaseConfig";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Profile.module.css";

function Profile() {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [editing, setEditing] = useState(false);
  const [prevDisplayName, setPrevDisplayName] = useState(user.displayName);
  const [prevEmail, setPrevEmail] = useState(user.email);

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSave = () => {
    // Call Firebase API to update user's display name and email
    setEditing(false);
  };

  const handleEdit = () => {
    setPrevDisplayName(displayName);
    setPrevEmail(email);
    setEditing(true);
  };

  const handleCancel = () => {
    setDisplayName(prevDisplayName);
    setEmail(prevEmail);
    setEditing(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>個人資料</h2>
      <div className={styles.field}>
        <label className={styles.label}>名稱：</label>
        {editing ? (
          <input
            className={styles.input}
            type="text"
            value={displayName}
            onChange={handleDisplayNameChange}
          />
        ) : (
          <span className={styles.value}>{displayName}</span>
        )}
      </div>
      <div className={styles.field}>
        <label className={styles.label}>電子郵件：</label>
        {editing ? (
          <input
            className={styles.input}
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        ) : (
          <span className={styles.value}>{email}</span>
        )}
      </div>
      {editing ? (
        <div className={styles.buttons}>
          <button className={styles.saveButton} onClick={handleSave}>
            儲存
          </button>
          <button className={styles.cancelButton} onClick={handleCancel}>
            取消
          </button>
        </div>
      ) : (
        <button className={styles.editButton} onClick={handleEdit}>
          修改
        </button>
      )}
    </div>
  );
}

export default Profile;
