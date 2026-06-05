import { useState } from "react";
import styles from "../../styles/components/auth/RequestAccountCodeForm.module.css";

export default function RequestAccountCodeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [office, setOffice] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request account code", {
      firstName,
      lastName,
      email,
      department,
      office,
      role,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Request Account Code</h2>

      <label className={styles.field}>
        <span className={styles.label}>FIRST NAME</span>
        <input
          className={styles.input}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>LAST NAME</span>
        <input
          className={styles.input}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>EMAIL</span>
        <input
          className={styles.input}
          type="email"
          placeholder="name@pup.edu.ph"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>DEPARTMENT</span>
        <select
          className={styles.input}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="academic">Academic</option>
          <option value="admin">Administration</option>
          <option value="it">IT / Systems</option>
          <option value="finance">Finance</option>
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>OFFICE</span>
        <select
          className={styles.input}
          value={office}
          onChange={(e) => setOffice(e.target.value)}
          required
        >
          <option value="">Select Office</option>
          <option value="main">Main Office</option>
          <option value="admin">Administration Office</option>
          <option value="registrar">Registrar</option>
          <option value="library">Library</option>
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>ROLE</span>
        <select
          className={styles.input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="staff">Staff</option>
          <option value="guest">Guest</option>
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>DESCRIPTION (OPTIONAL)</span>
        <textarea
          className={styles.textarea}
          placeholder="Reason for request / additional information."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button className={styles.primaryButton} type="submit">
        Submit Request
      </button>

      <p className={styles.helpText}>
        Already have a Code? <a href="/register">Register Here</a>
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
