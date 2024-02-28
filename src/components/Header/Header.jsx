import React, { useState } from "react";
import NavBar from "../NavigationBar/NavBar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Logo from "../Logo/Logo";
import styles from "./css/header.module.css";
import BurgerBar from "../BurgerBar/BurgerBar";
import SearchBar from "../SearchBar/SearchBar";
function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleWidth);
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Logo />
        {windowWidth >= 970 && <NavBar />}
        <LanguageSwitcher />
        <BurgerBar />
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
