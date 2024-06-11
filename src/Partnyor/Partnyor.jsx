import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const Partnyor = () => {
  const [partnyorData, setPartnyorData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("https://ptiuaaoxezklmpprwjpx.supabase.co/storage/v1/object/sign/data/info.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2luZm8uanNvbiIsImlhdCI6MTcxODA4ODM5OCwiZXhwIjoxNzQ5NjI0Mzk4fQ.1x0ipczWOZrco6-2G9vE7BF-ci60i8gsvjJLZXYgkP8&t=2024-06-11T06%3A46%3A35.498Z");
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
                <a href={partnyor.url} target="_blank">
                  <article>
                    <img src={partnyor.imageLogo} alt="" />
                  </article>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnyor;
