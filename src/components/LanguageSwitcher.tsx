import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isPortfolio = location.pathname === "/portfolio";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const textColor = isPortfolio ? "text-black" : "text-white";
  const inactiveColor = isPortfolio
    ? "text-black/50 hover:text-black"
    : "text-white/50 hover:text-white";
  const dividerColor = isPortfolio ? "text-black/30" : "text-white/30";

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <button
        onClick={() => changeLanguage("en")}
        className={`transition-colors duration-300 ${
          i18n.language.startsWith("en")
            ? `${textColor} font-bold`
            : inactiveColor
        }`}
      >
        EN
      </button>
      <span className={dividerColor}>|</span>
      <button
        onClick={() => changeLanguage("es")}
        className={`transition-colors duration-300 ${
          i18n.language.startsWith("es")
            ? `${textColor} font-bold`
            : inactiveColor
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
