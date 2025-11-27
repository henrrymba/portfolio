import { navIcons, navLinks } from "#constants";
import dayjs from "dayjs";
import useWindowStore from "#store/window.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { t } = useTranslation();
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Henrry's Portfolio</p>
        <ul>
          {navLinks.map(({ id, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{t(`navbar.${type}`)}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mr-4">
          <LanguageSwitcher />
        </div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{time.format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};
export default Navbar;
