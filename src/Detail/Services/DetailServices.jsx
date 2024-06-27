import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./DetailServices.css";
import "/src/Servicess/Servicess.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

function DetailServices() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const servicesdata = location.state?.servicesdata; // location.state ni tekshirish va servicesdata ni olish
  const [submit, setSubmit] = useState(false);
  const [valueInput, setValueInput] = useState({
    companyName: "",
    fullName: "",
    phoneNumber: "+998 ",
    projectType: "",
    projectDetails: "",
  });

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { companyName, projectDetails, projectType, fullName, phoneNumber } =
      valueInput;

    let isValidation = true;

    if (!companyName) {
      console.log("Error: Companiya Nomi bo'sh");
      isValidation = false;
    }
    if (!fullName) {
      console.log("Error: F.I.SH bo'sh");
      isValidation = false;
    }
    if (!phoneNumber || phoneNumber === "+998 ") {
      console.log("Error: Telefon raqam bo'sh");
      isValidation = false;
    }
    if (!projectType) {
      console.log("Error: Loyiha turi bo'sh");
      isValidation = false;
    }
    if (!projectDetails) {
      console.log("Error: Loyiha haqida ma'lumot bo'sh");
      isValidation = false;
    }

    if (!isValidation) {
      const inputs = document.querySelectorAll(".in");
      for (let input of inputs) {
        if (!input.value) {
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      }
      setSubmit(false);
    } else {
      setSubmit(true);
      alert(`Ma'lumot junatildi ${companyName}`);
      // .error classini o'chirish
      const inputs = document.querySelectorAll(".in");
      for (let input of inputs) {
        input.classList.remove("error");
      }
    }
  };

  if (!servicesdata) {
    // Agar servicesdata mavjud bo'lmasa, foydalanuvchiga xabar ko'rsatish
    return <div>No data available</div>;
  }

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

            <form onSubmit={handleSubmit}>
              <article className="form-input-box">
                <label>
                  <p>Companiya Nomi</p>
                  <input
                    className="in"
                    type="text"
                    name="companyName"
                    placeholder="Nom kiriting"
                    value={valueInput.companyName}
                    onChange={handleChangeInputValue}
                  />
                </label>
                <label>
                  <p>F.I.SH</p>
                  <input
                    className="in"
                    type="text"
                    name="fullName"
                    placeholder="Familiya Ismingiz"
                    value={valueInput.fullName}
                    onChange={handleChangeInputValue}
                  />
                </label>
                <label>
                  <p>Telefon raqam</p>
                  <input
                    className="in"
                    type="text"
                    name="phoneNumber"
                    placeholder="Telefon raqam kiriting ..."
                    value={valueInput.phoneNumber}
                    onChange={handleChangeInputValue}
                  />
                </label>
                <label>
                  <p>Loyiha turi</p>
                  <input
                    className="in"
                    type="text"
                    name="projectType"
                    placeholder="Loyiha turini tanlang ..."
                    value={valueInput.projectType}
                    onChange={handleChangeInputValue}
                  />
                </label>
              </article>
              <label>
                <textarea
                  className="in"
                  name="projectDetails"
                  placeholder="Loyiha haqida ma'lumot yozing"
                  value={valueInput.projectDetails}
                  onChange={handleChangeInputValue}
                ></textarea>
              </label>
              <p className="line-form"></p>
              <button className="form-btn">
                Yuborish
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_604_185)">
                    <path
                      d="M4.48004 24.96C2.17988 26.7276 0.655396 25.6 0.655396 31.3452C6.40004 31.3452 5.55652 29.5411 7.04004 27.52"
                      stroke="white"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    ></path>
                    <path
                      d="M30.7085 0.639938C30.5145 0.643138 25.9155 0.748738 21.4553 2.9689C19.8425 3.77338 18.416 4.79034 17.2134 5.99162C13.5545 9.6505 6.3763 18.7641 6.07294 19.1507L5.99934 19.2441L5.96414 19.358C5.86046 19.694 5.72734 20.9958 8.36798 23.6371C10.3878 25.6563 11.632 26.0806 12.32 26.0806C12.4755 26.0806 12.5824 26.0575 12.6445 26.0383L12.7584 26.0031L12.8518 25.9295C13.2422 25.6217 22.4537 18.3417 26.0089 14.7878C27.2077 13.5871 28.2227 12.1606 29.0246 10.5478C31.2339 6.09594 31.3555 1.4873 31.36 1.29338L31.3734 0.628418L30.7085 0.639938ZM21.76 12.7999C20.3462 12.7999 19.2 11.6537 19.2 10.2399C19.2 8.82618 20.3462 7.67994 21.76 7.67994C23.1737 7.67994 24.32 8.82618 24.32 10.2399C24.32 11.6537 23.1737 12.7999 21.76 12.7999ZM13.6435 26.935L13.5501 27.0086L13.4688 27.0726L14.0998 29.5948C14.1529 29.8086 14.3129 29.9801 14.5222 30.0479C14.5869 30.0691 14.6534 30.0799 14.72 30.0799C14.8672 30.0799 15.0131 30.0287 15.1296 29.9321L18.9696 26.7321C19.1155 26.6099 19.2 26.43 19.2 26.2399V22.4447C16.3296 24.8121 13.8438 26.7769 13.6435 26.935ZM4.99454 18.4511L5.06686 18.359C5.22302 18.1606 7.17822 15.678 9.54942 12.7993H5.75998C5.5699 12.7993 5.39006 12.8838 5.26846 13.0297L2.06846 16.8697C1.92766 17.0393 1.88286 17.2691 1.95134 17.4783C2.01982 17.6876 2.1907 17.847 2.40446 17.9001L4.9299 18.5318L4.99454 18.4511ZM7.46302 24.5414C6.2643 23.342 5.54046 22.334 5.12446 21.4937L4.58046 22.4089C4.21886 23.0483 4.8083 24.1452 6.33278 25.6691C7.57886 26.9145 8.50814 27.5199 9.17374 27.5199C9.37406 27.5199 9.51294 27.4649 9.60382 27.4131L10.5069 26.878C9.58654 26.4262 8.57918 25.6575 7.46302 24.5414Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_604_185">
                      <rect width="32" height="32" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailServices;
