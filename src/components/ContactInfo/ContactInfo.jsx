import React from "react";
import { useTranslation } from "react-i18next";
function ContactInfo() {
  const { t } = useTranslation();
  const contactInfo = t("contactPage", { returnObjects: true });
  return (
    <div>
      {contactInfo.map((info) => {
        return (
          <React.Fragment key={info.id}>
            <h3>{info.title}</h3>
            <p>{info.info}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ContactInfo;
