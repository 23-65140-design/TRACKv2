import { useState } from "react";
import styles from "../../styles/components/auth/RegisterForm.module.css";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountCode, setAccountCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register attempt", { username, password, confirmPassword, accountCode });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Create Your Account</h2>

      <label className={styles.field}>
        <span className={styles.label}>USERNAME</span>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>PASSWORD</span>
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>CONFIRM PASSWORD</span>
        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>ACCOUNT CODE</span>
        <input
          className={styles.input}
          type="text"
          placeholder="Account Code"
          value={accountCode}
          onChange={(e) => setAccountCode(e.target.value)}
          required
        />
      </label>

      <button className={styles.primaryButton} type="submit">
        Register
      </button>

      <p className={styles.helpText}>
        Need an Account Code? <a href="/request-account-code">Request one Here</a>
      </p>

      <div className={styles.loginAction}>
        <span className={styles.loginText}>Already have an Account?</span>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </div>
    </form>
  );
}
