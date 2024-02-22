import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import NavBar from "../NavigationBar/NavBar";
import styles from "./css/burgerBar.module.css";

function BurgerBar() {
  const [showBurger, setShowBurger] = useState(false);
  const burgerRef = useRef(null);
  console.log(Boolean(burgerRef.current));
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        setShowBurger(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
  }, []);
  const handleShow = () => {
    setShowBurger((prevShow) => !prevShow);
  };

  return (
    <div className={styles.menuBarWrapper} ref={burgerRef}>
      <button className={styles.menuBar} onClick={handleShow}>
        <FaBars />
      </button>
      {showBurger && (
        <div>
          <NavBar />
        </div>
      )}
    </div>
  );
}

export default BurgerBar;
