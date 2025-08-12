import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Partnyor = () => {
  const [partnyorData, setPartnyorData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("https://uic.group/api/v1/partners/");
        const data = await response.json();
        setPartnyorData(data);
      } catch (error) {
        throw new Error("Sizda aloqa yaxshi emas", error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="Partnyor-Parent-Child" id="partnyor">
      <div className="container">
        <div className="Titlte-Partnoyr">
          <p className="title-fonts">{t("Partnyor")}</p>
          <h1 className="Title">{t("PartnyorTitle")}</h1>
        </div>
        <div className="Partnyor-list-Parent">
          <div className="Grid-Partnyor">
            {partnyorData?.map((partnyor) => (
              <div className="grid-partnyor-list" key={partnyor.id}>
                <a href={partnyor.company_site} target="_blank" rel="noopener noreferrer">
                  <article>
                    <img src={partnyor.photo_url} alt="" />
                  </article>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-box">
          <Swiper
              spaceBetween={50}
              slidesPerView={3}
              className="mySwiper"
          >
            {partnyorData?.map((partnyor) => (
              <SwiperSlide key={partnyor.id}>
                <a href={partnyor.company_site} target="_blank" rel="noopener noreferrer">
                    <img src={partnyor.photo_url} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partnyor;
