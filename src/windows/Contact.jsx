import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants/index.js";
import { WindowControls } from "#components";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>{t("contact.title")}</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/me.jpeg" alt="Henrry" className="w-30 rounded-xl" />

        <h3>{t("contact.connect")}</h3>
        <p>{t("contact.description")}</p>
        <p>
          <a href="mailto:contacto@henrry.es">contacto@henrry.es</a>
        </p>
        <p>
          <a href="tel:+34722464208">+34 722 464 208</a>
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
