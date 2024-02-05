import React from "react";
import styles from "./css/contactInfoDetails.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function ContactInfoDetails({ info }) {
  return (
    <div key={info.id} className={styles.contactInfoDetailsWrapper}>
      {info.id === 31 && (
        <>
          <FaEnvelope className={styles.icon} />
          <h3>{info.title}</h3>
        </>
      )}
      {info.id === 32 && (
        <>
          <FaPhone className={styles.icon} />
          <h3>{info.title}</h3>
        </>
      )}
      {info.id === 33 && (
        <>
          <FaMapMarkerAlt className={styles.icon} />
          <h3>{info.title}</h3>
        </>
      )}
      <p>
        {info.id === 31 ? (
          <Link to="mailto:gmadzgarashvili@yahoo.com">{info.info}</Link>
        ) : info.id === 32 ? (
          <Link to="tel:+995555390756">{info.info}</Link>
        ) : (
          info.info
        )}
      </p>
    </div>
  );
}

export default ContactInfoDetails;
