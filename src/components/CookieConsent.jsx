import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem("cookie_consent");
  });

  const loadGoogleAnalytics = () => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-1YR3BB4P09";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1YR3BB4P09');
    `;
    document.head.appendChild(script2);
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "true") {
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm text-gray-600 font-medium">
          {t("cookies.message")}
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleDecline}
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        >
          {t("cookies.decline")}
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-500/20 cursor-pointer"
        >
          {t("cookies.accept")}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
