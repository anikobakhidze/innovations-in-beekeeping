import React from "react";
import Innovations from "../../components/InnovationsSection/Innovations";
import useTitle from "../../hook/useTitle";

function Home() {
  useTitle("Innovations in Beekeeping");
  return <Innovations />;
}

export default Home;
