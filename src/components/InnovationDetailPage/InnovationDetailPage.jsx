import React from "react";
import { useTranslation } from "react-i18next";
import DetailPage from "../DetailPage/DetailPage";
function InnovationDetailPage({ id }) {
  const { t } = useTranslation();
  const innovationDetailPage = t("innovationDetailPage", {
    returnObjects: true,
  });
  return (
    <>
      {innovationDetailPage.map(
        (detailPage) =>
          detailPage.id === id && (
            <DetailPage detailPage={detailPage} key={detailPage.id} />
          )
      )}
    </>
  );
}

export default InnovationDetailPage;
