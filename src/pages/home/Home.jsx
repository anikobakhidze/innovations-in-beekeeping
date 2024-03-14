import React from "react";
import Innovations from "../../components/InnovationsSection/Innovations";
import useTitle from "../../hook/useTitle";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  useTitle(t("home"));
  return <Innovations />;
}

export default Home;
