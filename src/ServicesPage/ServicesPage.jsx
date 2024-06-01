import { useTranslation } from "react-i18next";


const ServicesPage = () => {

  const {t} = useTranslation()
    return (
      <div className="Services-Parent">
        <div className="container">
          <div className="Service-Parent-Child-Text">
            <span>
              <p className='title-fonts'>{t("ServicesChild")}</p>
              <div className="Services-Text-line"></div>
            </span>
            <h1>{t("services")}</h1>
          </div>
          <div className="Services-Parent-Child-Box">
            <a href='#1' className="Services-Box">
              <h1>{t("ServicesWebsite")}</h1>
              <p>
               {t("ServicesWebsiteInfo")}
              </p>
            </a>
            <a href='#4' className="Services-Box">
              <h1>{t("ServicesMobileApp")}</h1>
              <p>
                {t("ServicesMobileAppInfo")}
              </p>
            </a>
            <a href='#1' className="Services-Box">
              <h1>UI&UX</h1>
              <p>
                {t("ServicesUIUX_Info")}
              </p>
            </a>
            <a href='#1' className="Services-Box">
              <h1>{t("ServicesMedia")}</h1>
              <p>
                {t("ServicesMediaInfo")}
              </p>
            </a>
            <a href='#1' className="Services-Box">
              <h1>{t("ServicesCRM")}</h1>
              <p>
                {t("ServicesCRMInfo")}
              </p>
            </a>
            <a href='#1' className="Services-Box">
              <h1>{t("ServicesBranding")}</h1>
              <p>
               {t("ServicesBrandingInfo")}
              </p>
            </a>
            <a href='#1' className="Services-Box">
              <h1>{t("ServicesKiberHavsizlik")}</h1>
              <p>
                {t("ServicesKiberHavsizlikInfo")}
              </p>
            </a>
          </div>
        </div>
      </div>
    );
};


export default ServicesPage;