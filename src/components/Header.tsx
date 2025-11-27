import React from "react";
import { LayoutGrid, FileDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language.startsWith("es");
  const cvFile = isSpanish
    ? "Henrry_Murana_Desarrollador_FrontEnd.pdf"
    : "Henrry_Murana_FrontEnd_Developer.pdf";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none">
      <div className="hidden md:flex items-center justify-center opacity-80">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
        </svg>
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <LanguageSwitcher />
        <a
          href="/portfolio"
          className="hidden md:flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-sm font-bold hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider text-sm"
        >
          <LayoutGrid size={18} />
          {t("header.portfolio")}
        </a>
        <a
          href={`/files/${cvFile}`}
          download={cvFile}
          className="border border-white/30 p-3 rounded-sm hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center"
          title={t("header.downloadCV")}
        >
          <FileDown size={24} />
        </a>
      </div>
    </header>
  );
};
