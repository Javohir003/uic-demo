import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

import LogoUICHome from "../Icon/logoUic.svg";
import LogoUicHome2 from "../Icon/UIC-Logo-Home.svg";
import Languageicon from "../Icon/LanguageLogo.svg";
import ScrollTopAuto from "../ScrollP/Scroll-Page";
import ChatTelegram from "../ChatPage/ChatTelegram";

function NavbarLayout() {
  const [scrollY, setScrollY] = useState(0);
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem("i18nextLanguage");
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLanguage");
    if (storedLanguage && storedLanguage !== i18n.languages) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const headerStyleScroll = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
    padding: scrollY >= 300 ? "0px 0px" : "0",
    backdropFilter: scrollY >= 300 ? "blur(10px)" : "none",
    backgroundColor: scrollY >= 300 ? "rgba(21, 21, 21, 0.589)" : "transparent",
    transitionDuration: "0.5s",
    transition: "all 0.5s ease-out",
  };

  const newLogo = {
    display: scrollY >= 300 ? "none" : scrollY >= 0 ? "block" : "none",
    transition: "all 1s ease-in-out",
  };

  const altLogoStyle = {
    display: scrollY >= 300 ? "block" : "none",
    transition: "all 1s ease-out",
  };

  const handleChange = (e, val) => {
    e.preventDefault();
    i18n.changeLanguage(val);
    localStorage.setItem("i18nextLanguage", val);
  };

  return (
    <>
      <header>
        <ScrollTopAuto />
        <ChatTelegram />
        <div className="Navbar-Parent">
          <nav style={headerStyleScroll}>
            <div className="container">
              <div id="Navbar-Parent">
                <a href="/" className="Logo-UIC">
                  <img
                    id="altLogoId"
                    src={LogoUicHome2}
                    alt=""
                    style={altLogoStyle}
                  />
                  <img
                    id="newLogoId"
                    src={LogoUICHome}
                    alt=""
                    style={newLogo}
                  />
                </a>
                <div className="Nav-Parent-Child2">
                  <ul className="Nav-List">
                    <li>
                      <Link className="actives" to={`/${i18n.language}/about`}>{t("about")}</Link>
                    </li>
                    <li>
                      <Link to={`/${i18n.language}/portfolio`}>
                        {t("portfolio")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${i18n.language}/services`}>
                        {t("services")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${i18n.language}/vacancies`}>
                        {t("vacansies")}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/${i18n.language}/blog`}>{t("blog")}</Link>
                    </li>
                    <a href="tel: +998 71 200 70 07" target="_blank">
                      <span>
                        {" "}
                        +998 71 <p>200 70 70</p>
                      </span>
                    </a>
                  </ul>
                  <article className="UIC-Language">
                    <img src={Languageicon} alt="" />
                    <span
                      onClick={(e) => handleChange(e, "eng")}
                      value={languages}
                    >
                      Eng
                    </span>
                    <span
                      onClick={(e) => handleChange(e, "ru")}
                      value={languages}
                    >
                      Rus
                    </span>
                    <span
                      onClick={(e) => handleChange(e, "uz")}
                      value={languages}
                    >
                      Uzb
                    </span>
                  </article>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default NavbarLayout;
