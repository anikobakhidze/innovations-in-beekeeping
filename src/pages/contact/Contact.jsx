import React from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("contact")}</h2>
      <ContactInfo />
    </div>
  );
}

export default Contact;
