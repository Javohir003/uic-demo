import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Servicess() {
  const { t, i18n } = useTranslation();
  const [servicesdata, setServicesdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesdata = await fetch("https://ptiuaaoxezklmpprwjpx.supabase.co/storage/v1/object/sign/data/info.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2luZm8uanNvbiIsImlhdCI6MTcxOTEzNzg3MSwiZXhwIjoxNzUwNjczODcxfQ.bjuK7f2CTND9efpoID2JbGdi4whPvwVO3bizW7Gb9jY&t=2024-06-23T10%3A17%3A50.735Z");
        const response = await servicesdata.json();
        setServicesdata(response.servicesData);
      } catch (error) {
        console.error("Servicesdan data kelmayopti ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("services")}</title>
      </Helmet>
      <div className="Parent-Services">
        <div className="container">
          <div className="Servicess-header">
            <p className="title-styles">{t("ServicesNewPageChildTitle")}</p>
            <h3 className="title-leader">{t("ServicesNewPageTitle")}</h3>
          </div>
          <div className="Services-Parent-Child-Box">
            {servicesdata.map((services, id) => (
              <Fragment key={id}>
                <Link
                  to={`/${i18n.language}/services/${services.types}`}
                  state={{servicesdata: services}}
                  className="Services-Box"
                >
                  <h1>{t(services.title[i18n.language])}</h1>
                  <p>{t(services.infoTitle[i18n.language])}</p>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicess;
