import React from "react";
import NavBar from "../NavigationBar/NavBar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Logo from "../Logo/Logo";
import styles from "./css/header.module.css";
function Header() {
  return (
    <header className={styles.headerWrapper}>
      <Logo />
      <NavBar />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
