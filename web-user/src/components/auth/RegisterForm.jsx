import { useState } from "react";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
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

      <div className={styles.field}>
        <InputField
          label="USERNAME"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <InputField
          label="PASSWORD"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <InputField
          label="CONFIRM PASSWORD"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <InputField
          label="ACCOUNT CODE"
          type="text"
          placeholder="Account Code"
          value={accountCode}
          onChange={(e) => setAccountCode(e.target.value)}
          required
        />
      </div>

      <Button className={styles.primaryButton} type="submit" variant="primary">
        Register
      </Button>

      <p className={styles.helpText}>
        Need an Account Code? <a href="/request-account-code">Request one Here</a>
      </p>

      <div className={styles.loginAction}>
        <span className={styles.loginText}>Already have an Account?</span>
        <Button
          type="button"
          className={styles.secondaryButton}
          variant="secondary"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
