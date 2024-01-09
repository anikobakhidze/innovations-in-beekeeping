import React from "react";
import NavBar from "../NavigationBar/NavBar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Logo from "../Logo/Logo";
function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
