import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import uzbekistonlikImg1 from "/public/assests/DetailImg/Uzbekistonlikimg1.jpg";
import uzbekistonlikImg2 from "/public/assests/DetailImg/Uzbekistonlikimg2.jpg";
import uzbekistonlikImg3 from "/public/assests/DetailImg/Uzbekistonlikimg3.jpg";
// import uzbekistonlikImg2 from '/public/assests/DetailImg/UzbekistonlikImg2.jpg';
// import uzbekistonlikImg3 from '/public/assests/DetailImg/UzbekistonlikImg3.jpg'

import "./Portfolio.css";

function DetailPortfolio() {
  1;
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { projects } = location.state || {};

  console.log(projects);

  return (
    <>
      {/* <h1 style={{ fontSize: "80px", color: "white" }}>
        Hello {t(projects.title_portfolio)}
      </h1> */}
      <div className="DetailPortfolio-wrapper ">
        <div className="container">
          <div className="Detail-Portfolio-Parent">
            <div className="detail-container">
              <div className="Detail-Portfolio-header">
                <img src="/public/assests/DetailImg/uzbekistonlikLogo.svg" alt="" />
                <article className="hedaer-left-detailportfolio">
                  <h3>JavaScript (Vue.JS)</h3>
                  <h3>Python(Django)</h3>
                  <button>Website</button>
                </article>
              </div>
            </div>
            <div className="Detail-Portfolio-blur">
              <h1>{t(projects.title_portfolio)}</h1>
              <p>{t(projects.title_portfolio)}</p>
            </div>
            <div className="detail-container">
              <button className="btn-detailPortfolio btn-anim">
                <Link to="https://uzbekistans.club/" target="_blank">
                  Got To Web site
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1802_2798)" fill="none">
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#FFFFFF"
                        fillOpacity="0.3"
                      ></rect>
                      <path
                        d="M7.23584 13.1539L12.2358 18.4316V5.09831M17.2358 13.1539L12.2358 18.4316L17.2358 13.1539Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.6px"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </button>
            </div>
            <div className="wrapper-img-portfolio">
              <img className="img1" src={uzbekistonlikImg1} alt="" />
            </div>

            <p className="detail-container text-detail-portfolio">
              The UIC Group provided services for the creation of a website and
              an application for Uzbekistan's club project, which was created to
              further promote the achievements of the great generation of
              Uzbekistan.
            </p>
            <div className="wrapper-img-portfolio">
              <img className="img1" src={uzbekistonlikImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPortfolio;
