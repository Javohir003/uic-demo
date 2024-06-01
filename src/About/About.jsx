import React from "react";

import AboutLogo from "/public/assests/aboutUIClogo.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";

function About(){

  const {t} = useTranslation()

  
    return (
      <>
        <Helmet>
          <title>{t("about")}</title>
        </Helmet>
        <div className="AboutPage-Parent">
          <div className="container">
            <div className="About-SecondPage">
              <div className="About-UIC-Logo">
                <img src={AboutLogo} alt="About Logo" />
              </div>
              <div className="About-UIC-Info-Text">
                <h1>{t("about1Title")}</h1>
                <p className="about-text">
                  {t("aboutTitle")}
                </p>
                <p className="about-text">
                  {t("aboutTitle1")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;
