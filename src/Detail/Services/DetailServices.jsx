import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./DetailServices.css";
import "/src/Servicess/Servicess.css";
import { Helmet } from "react-helmet-async";

function DetailServices() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { servicesdata } = location.state;
  console.log(servicesdata);

  return (
    <>
      <Helmet>
        <title>{t("services")}</title>
      </Helmet>
      <div className="Services-Child-Wrapper">
        <div className="container">
          <article className="services-title">
            <p className="title-styles">YOUR DIGITAL PARTNER</p>
            <h1 className="title-services-form">
              {t(servicesdata.title[i18n.language])}
            </h1>
          </article>
          <div className="services-child-box">
            <p className="services-child-box-title">
              Ushbu birlamchi ma’lumotlarni to‘ldirganingizdan so‘ng bizning
              mas’ul xodimlarimiz siz bilan aloqaga chiqishadi.
            </p>

            <form>
              <article className="form-input-box">
                <label>
                  <p>Companiya Nomi</p>
                  <input type="text" placeholder="Nom kiriting" />
                </label>
                <label>
                  <p>F.I.SH</p>
                  <input type="text" placeholder="Familiya Ismingiz" />
                </label>
                <label>
                  <p>Telefon raqam</p>
                  <input type="text" placeholder="Telefon raqam kiriitng ..." />
                </label>
                <label>
                  <p>Loyiha turi</p>
                  <input type="text" placeholder="Loyiha turini tanlang ..." />
                </label>
              </article>
              <label>
                <textarea placeholder="Loyiha haqida ma'lumot yozing"></textarea>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailServices;
