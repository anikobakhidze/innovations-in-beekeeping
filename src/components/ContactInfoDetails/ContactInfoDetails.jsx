import React from "react";
import styles from "./css/contactInfoDetails.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function ContactInfoDetails({ info }) {
  return (
    <div key={info.id} className={styles.contactInfoDetailsWrapper}>
      {info.title === "Email" && (
        <>
          <FaEnvelope className={styles.icon} />
          <h3>{info.title}</h3>
        </>
      )}
      {info.title === "Mobile" && (
        <>
          <FaPhone className={styles.icon} />
          <h3>{info.title}</h3>
        </>
      )}
      {info.title === "Address" && (
        <>
          <FaMapMarkerAlt className={styles.icon} />
          <h3>{info.title}</h3>
        </>
      )}
      <p>
        {info.title === "Email" ? (
          <Link to="mailto:gmadzgarashvili@yahoo.com">{info.info}</Link>
        ) : info.title === "Mobile" ? (
          <Link to="tel:+995555390756">{info.info}</Link>
        ) : (
          info.info
        )}
      </p>
    </div>
  );
}

export default ContactInfoDetails;
