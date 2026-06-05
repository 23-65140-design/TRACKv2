import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "../../styles/components/auth/LoginForm.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt", { username, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Welcome Back</h2>

      <label className={styles.field}>
        <span className={styles.label}>USERNAME</span>
        <input
          className={styles.input}
          type="text"
          placeholder="JohnDoe"
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
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <div className={styles.forgotLink}>
        <a href="/forgot-password">FORGOT PASSWORD?</a>
      </div>

      <button className={styles.primaryButton} type="submit">
        Login
      </button>

      <button
        type="button"
        className={styles.googleButton}
        onClick={handleGoogleLogin}
      >
        <FcGoogle className={styles.googleIcon} />
        Continue With Google
      </button>

      <div className={styles.registerSection}>
        <span className={styles.registerText}>New to the institution?</span>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => (window.location.href = "/register")}
        >
          Register
        </button>
      </div>
    </form>
  );
}
