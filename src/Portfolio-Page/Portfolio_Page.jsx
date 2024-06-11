import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Portfolio_Page = () => {
  const [projects, setProjects] = useState([]);
  const [filterType, setFilterType] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch("https://ptiuaaoxezklmpprwjpx.supabase.co/storage/v1/object/sign/data/info.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2luZm8uanNvbiIsImlhdCI6MTcxODA4ODM5OCwiZXhwIjoxNzQ5NjI0Mzk4fQ.1x0ipczWOZrco6-2G9vE7BF-ci60i8gsvjJLZXYgkP8&t=2024-06-11T06%3A46%3A35.498Z");
        const data = await res.json();
        setProjects(data.portfolio);
      } catch (error) {
        throw new Error("Sizda Aloq yaxchi emas", error);
      }
    };
    dataFetch();
  }, []);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  return (
    <>
      <Helmet>
        <title>{t("portfolio")}</title>
      </Helmet>
      <div className="Portfolio-Parent" id="portfolio">
        <div className="container">
          <div className="Portfolio-Nav">
            <article className="Portfolio-Name">
              <h1>{t("portfolio")}</h1>
            </article>
            <article className="Portfolio-list-nav">
              <a href="#1">
                <button
                  className={`btn-portfolio ${filterType === "" && "active"}`}
                  onClick={() => handleFilter("")}
                >
                  {t("allProjects")}
                </button>
              </a>
              <a href="#2">
                <button
                  className={`btn-portfolio ${
                    filterType === "Mobile App" && "active"
                  }`}
                  onClick={() => handleFilter("Mobile App")}
                >
                  {t("Mobile App")}
                </button>
              </a>
              <a href="#3">
                <button
                  className={`btn-portfolio ${
                    filterType === "CRM" && "active"
                  }`}
                  onClick={() => handleFilter("CRM")}
                >
                  {t("CRM")}
                </button>
              </a>
              <a href="#4">
                <button
                  className={`btn-portfolio ${
                    filterType === "Website" && "active"
                  }`}
                  onClick={() => handleFilter("Website")}
                >
                  {t("Website")}
                </button>
              </a>
            </article>
          </div>
          <h1 className="Not_Found_CRM">
            {filterType === "CRM" && (
              <img src="/public/assests/notif.png" alt="" />
            )}
          </h1>
          <div className="Portfolio-Projects-Box">
            <div className="box-Portfolio">
              {projects
                .filter(
                  (proj) => filterType === "" || proj.title_web === filterType
                )
                .map((proj) => (
                  <Link to={{pathname: `/${i18n.language}/portfolio/${proj.routesLink}`}} state={{projects: proj}} key={proj.id}>
                    <div className="text-info">
                      {t(proj.title_portfolio)}
                      <p className="title-site">{t(proj.title_web)}</p>
                    </div>
                    <img src={proj.images} alt="" />
                  </Link>
                ))}
            </div>
          </div>
          <div className="button-Portfolio">
            <button className="btn-anim">
              <span>
                {t("allProjects")}
                <svg
                  className="second-animation"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    width="24"
                    height="24"
                    rx="12"
                    fill="#FFFFFF"
                    fillOpacity="0.3"
                  ></rect>
                  <path
                    d="M16.1843 14.5534L16.3807 7.28596L6.95266 16.7141M9.11326 7.48238L16.3807 7.28596L9.11326 7.48238Z"
                    stroke="#FFFFFF"
                    strokeWidth="1.6px"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio_Page;
