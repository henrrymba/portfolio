import React from "react";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const PortfolioWidget: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-8 left-8 z-40 hidden lg:flex flex-col gap-4 w-40 pointer-events-none select-none">
      <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">
        {t("portfolioWidget.connect")}
      </div>

      <div className="border border-gray-200 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm pointer-events-auto">
        <div className="space-y-3">
          <a
            href="https://github.com/henrrymba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase hover:text-gray-600 transition-colors duration-300 group"
          >
            <div className="p-1.5 bg-black text-white rounded-full group-hover:bg-gray-200 group-hover:text-black transition-colors">
              <Github size={12} />
            </div>
            <span>Github</span>
          </a>

          <a
            href="https://www.linkedin.com/in/henrrymb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase hover:text-[#0077b5] transition-colors duration-300 group"
          >
            <div className="p-1.5 bg-black text-white rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
              <Linkedin size={12} />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="border border-gray-200 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm flex items-center gap-3">
        <div className="text-2xl font-display font-bold text-white bg-black rounded-full w-8 h-8 flex items-center justify-center">
          H
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase font-bold text-gray-400">
            {t("portfolioWidget.frontend")}
          </span>
          <span className="text-[9px] uppercase font-bold">
            {t("portfolioWidget.developer")}
          </span>
        </div>
      </div>
    </div>
  );
};
