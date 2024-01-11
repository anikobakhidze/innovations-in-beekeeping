import React from "react";
import { useTranslation } from "react-i18next";
import ContactInfoDetails from "../ContactInfoDetails/ContactInfoDetails";
import styles from "./css/constactInfo.module.css";
function ContactInfo() {
  const { t } = useTranslation();
  const contactInfo = t("contactPage", { returnObjects: true });
  return (
    <div className={styles.constaInfoWrapper}>
      {contactInfo.map((info) => {
        return <ContactInfoDetails info={info} key={info.id} />;
      })}
    </div>
  );
}

export default ContactInfo;
