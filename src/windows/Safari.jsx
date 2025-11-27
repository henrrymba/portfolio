import { WindowControls, Experience } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Safari = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              className="flex-1 "
              placeholder={t("safari.searchPlaceholder")}
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog max-h-[600px] overflow-y-auto overflow-x-hidden">
        <h2>{t("safari.experience")}</h2>
        <div className="space-y-8">
          <Experience />
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
