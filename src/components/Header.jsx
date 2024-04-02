import styles from './Header.module.css';

import todoLogo from "../assets/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do ToDoList" />
      <h1 className={styles.h1To}>to</h1>
      <h1 className={styles.h1Do}>do</h1>
    </header>
  );
} 