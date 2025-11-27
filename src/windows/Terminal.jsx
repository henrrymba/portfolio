import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import { useTranslation } from "react-i18next";

const Terminal = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>{t("terminal.techStack")}</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@henrry % </span>
          {t("terminal.showStack")}
        </p>

        <div className="label">
          <p className="w-32">{t("terminal.category")}</p>
          <p>{t("terminal.technologies")}</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item} {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} /> 6 of 6 {t("terminal.loaded")} (100%)
          </p>
          <p className="text-black">
            <Flag size={20} fill="black" />
            {t("terminal.renderTime")}: 4ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
