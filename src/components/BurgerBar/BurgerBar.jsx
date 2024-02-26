import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import NavBar from "../NavigationBar/NavBar";
import styles from "./css/burgerBar.module.css";
import { useLocation } from "react-router-dom";

function BurgerBar() {
  const [showBurger, setShowBurger] = useState(false);
  const burgerRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const handleOutside = (e) => {
      if (burgerRef.current && !burgerRef.current.contains(e.target)) {
        setShowBurger(false);
      }
    };
    window.addEventListener("click", handleOutside);
  }, []);
  useEffect(() => {
    setShowBurger(false);
  }, [location.pathname]);
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
