import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
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

      <div className={styles.field}>
        <InputField
          label="USERNAME"
          type="text"
          placeholder="JohnDoe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <InputField
          label="PASSWORD"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.forgotLink}>
        <a href="/forgot-password">FORGOT PASSWORD?</a>
      </div>

      <Button type="submit" variant="primary" className={styles.primaryButton}>
        Login
      </Button>

      <Button
        type="button"
        variant="google"
        className={styles.googleButton}
        onClick={handleGoogleLogin}
        icon={<FcGoogle />}
      >
        Continue With Google
      </Button>

      <div className={styles.registerSection}>
        <span className={styles.registerText}>New to the institution?</span>
        <Button
          type="button"
          variant="secondary"
          className={styles.secondaryButton}
          onClick={() => (window.location.href = "/register")}
        >
          Register
        </Button>
      </div>
    </form>
  );
}
