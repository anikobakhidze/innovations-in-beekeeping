import React from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import styles from "./css/contact.module.css";
import useTitle from "../../hook/useTitle";
function Contact() {
  const { t } = useTranslation();
  useTitle("Contact Page");
  return (
    <div className={styles.contactWrapper}>
      <h2>{t("contact")}</h2>
      <div className={styles.contactInfoContainer}>
        <ContactInfo />
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.375343358251!2d44.79568757720409!3d41.733996274422324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472b9ee0b76e3%3A0xcd1a105598d2ee43!2s21%2F45%20Giorgi%20Saakadze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1704977032933!5m2!1sen!2sge"
            width="500"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="address"
            className={styles.mapGeo}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
