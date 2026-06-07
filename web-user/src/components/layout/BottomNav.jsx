import { NavLink } from 'react-router-dom';
import styles from "../../styles/components/layout/BottomNav.module.css";

export default function BottomNav() {
  const items = [
    { path: "/", label: "HOME" },
    { path: "/calendar", label: "CALENDAR" },
    { path: "/tasks", label: "TASKS" },
    { path: "/analytics", label: "ANALYTICS" }
  ];
  return (
    <nav className={styles.bottomNav}>
      {items.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}