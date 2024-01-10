import React from "react";
import styles from "./css/LogoImage.module.css";
function LogoImage() {
  return (
    <div className={styles.logoContainer}>
      <img src="../../images/Logo.svg" alt="logoImg" />
    </div>
  );
}

export default LogoImage;
