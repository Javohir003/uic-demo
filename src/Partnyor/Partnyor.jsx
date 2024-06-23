import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Partnyor = () => {
  const [partnyorData, setPartnyorData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch(
          "https://ptiuaaoxezklmpprwjpx.supabase.co/storage/v1/object/sign/data/info.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2luZm8uanNvbiIsImlhdCI6MTcxODk2NzM3NCwiZXhwIjoxNzUwNTAzMzc0fQ.DVsJEpqKmQibj_wiaPlyBCkNuVkTzNlLa73kGOxYiOM&t=2024-06-21T10%3A56%3A14.114Z"
        );
        const data = await response.json();

        const genetUUID = data.partnyors.map((partnyor) => ({
          ...partnyor,
          id: uuidv4(),
        }));
        setPartnyorData(genetUUID);
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
            {partnyorData.map((partnyor) => (
              <div className="grid-partnyor-list" key={partnyor.id}>
                <a href={partnyor.url} target="_blank" rel="noopener noreferrer">
                  <article>
                    <img src={partnyor.imageLogo} alt="" />
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
            {partnyorData.map((partnyor) => (
              <SwiperSlide key={partnyor.id}>
                <a href={partnyor.url} target="_blank">
                  <img src={partnyor.imageLogo} alt="" />
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
