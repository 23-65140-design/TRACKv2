import styles from "../../styles/components/layout/TopNav.module.css";

export default function TopNav({ title, onBack, onSave }) {
  return (
    <nav className={styles.topNav}>
      <button className={styles.backBtn} onClick={onBack}>← Back</button>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.saveBtn} onClick={onSave}>Save</button>
    </nav>
  );
}