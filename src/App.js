import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [location.pathname, setLoading]);

  return (
    <>
      {loading ? (
        <div className="loaderContainer">
          <PacmanLoader color="#FFC24B" size={40} />
        </div>
      ) : (
        <>
          <Header />
          <AppRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
