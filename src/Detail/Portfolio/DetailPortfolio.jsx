import { t } from "i18next";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./Portfolio.css";

function DetailPortfolio() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { projects } = location.state || [];



  const [detail, setDetail] = useState([]);


  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const res = await fetch('https://ptiuaaoxezklmpprwjpx.supabase.co/storage/v1/object/sign/data/info.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2luZm8uanNvbiIsImlhdCI6MTcxODA4ODM5OCwiZXhwIjoxNzQ5NjI0Mzk4fQ.1x0ipczWOZrco6-2G9vE7BF-ci60i8gsvjJLZXYgkP8&t=2024-06-11T06%3A46%3A35.498Z');
  //     const data = await res.json();
  //     console.log(data.portfolio);
  //     setDetail(data.portfolio)
  //   }
  //   fetchData()
  // }, [])

  console.log(projects);

  return (
    <>
      <div className="DetailPortfolio-wrapper ">
        <div className="container">
          <div className="Detail-Portfolio-Parent">
            <div className="detail-container">
              <div className="Detail-Portfolio-header">
                <img src={projects.detailPortfolioLogo} alt="" />
                <article className="hedaer-left-detailportfolio">
                  <h3>JavaScript (Vue.JS)</h3>
                  <h3>Python(Django)</h3>
                  <button>{t(projects.title_web)}</button>
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
              <img  className="img1" src={projects.detailPortfolio} alt="" />
            </div>

            <p className="detail-container text-detail-portfolio">
              The UIC Group provided services for the creation of a website and
              an application for Uzbekistan's club project, which was created to
              further promote the achievements of the great generation of
              Uzbekistan.
            </p>
            <div className="wrapper-img-portfolio">
              <img className="img1" src={projects.detailPortfolio1} alt="" />
            </div>
            <p className="detail-container text-detail-portfolio">
              The UIC Group provided services for the creation of a website and
              an application for Uzbekistan's club project, which was created to
              further promote the achievements of the great generation of
              Uzbekistan.
            </p>
            <div className="wrapper-img-portfolio">
              <img className="img1" src={projects.detailPortfolio2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPortfolio;
