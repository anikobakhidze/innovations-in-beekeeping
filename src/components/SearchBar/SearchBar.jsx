import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./css/searchBar.module.css";
import { routes } from "../../config/routes";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [searchContent, setSearchContent] = useState("");
  const handleInputChange = (e) => {
    setSearchContent(e.target.value.toLowerCase());
  };
  const filteredContent = searchContent
    ? t("innovationDetailPage", {
        returnObjects: true,
      }).filter((object) => object.title.toLowerCase().includes(searchContent))
    : "";
  const handleNavigate = (id) => {
    const matchNavigate = routes.find((route) => route.searchNav === id);
    if (matchNavigate) {
      navigate(matchNavigate.path);
      setSearchContent("");
    }
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setSearchContent("");
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div ref={inputRef} className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Search"
        value={searchContent}
        onChange={handleInputChange}
      />
      {filteredContent.length > 0 && (
        <ul className={styles.searchResultContainer}>
          {filteredContent.map((content) => (
            <li key={content.id} onClick={() => handleNavigate(content.id)}>
              {content.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
