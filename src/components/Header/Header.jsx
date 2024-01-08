import React from "react";
import NavBar from "../NavigationBar/NavBar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
function Header() {
  return (
    <header>
      <NavBar />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
