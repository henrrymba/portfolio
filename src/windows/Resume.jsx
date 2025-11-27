import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const { t, i18n } = useTranslation();

  const isSpanish = i18n.language.startsWith("es");
  const cvFile = isSpanish
    ? "Henrry_Murana_Desarrollador_FrontEnd.pdf"
    : "Henrry_Murana_FrontEnd_Developer.pdf";
  const cvPath = `/files/${cvFile}`;

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2 className="truncate max-w-[200px]">{cvFile}</h2>

        <a
          href={cvPath}
          download={cvFile}
          className="cursor-pointer"
          title={t("header.downloadCV")}
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file={cvPath}>
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
