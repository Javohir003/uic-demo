import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailVacansy.css";
import Footer from "../../Footer/Footer";

function DetailVacansy() {
  const { id } = useParams();
  const [vacansies, setVacansies] = useState(null);
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const data = await fetch("https://ptiuaaoxezklmpprwjpx.supabase.co/storage/v1/object/sign/data/data.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXRhL2RhdGEuanNvbiIsImlhdCI6MTcxNzkyOTE0NSwiZXhwIjoxNzQ5NDY1MTQ1fQ.nQSc8aSrbkOwwBSN0jK2sV4O6vfAWbLQaYMeuncStRQ&t=2024-06-09T10%3A39%3A10.201Z");
        const res = await data.json();
        if (res && Array.isArray(res.vacansyData)) {
          const foundVacancy = res.vacansyData.find(
            (vac) => vac.id === parseInt(id)
          );
          setVacansies(foundVacancy);
        } else {
          console.error("Invalid response structure:", res);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData1();
  }, []);

  if (!vacansies) {
    return <p>Not Found Data :(</p>;
  }

  return (
    <>
      <div className="wrapper-Vacansy-Parent">
        <div className="container">
          <div className="wrapper-vacansy">
            <div className="vacansy-header">
              <h1 className="header-title">{vacansies.title}</h1>
              <p style={{ marginBottom: "30px", width: '100%', height: '1px', backgroundColor: 'rgb(147, 146, 146)'}} />
              <article className="vacansy-header-child">
                <article className="header-child-1">
                  <p className="tarmoq-oval">
                    <svg width="50" height="50" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M22.0058 9.75334L19.8891 9.74994C17.5111 9.74994 15.9743 11.3293 15.9743 13.7739V15.6292H13.846C13.6621 15.6292 13.5132 15.7786 13.5132 15.9628V18.6509C13.5132 18.8351 13.6623 18.9843 13.846 18.9843H15.9743V25.7674C15.9743 25.9516 16.1232 26.1008 16.3071 26.1008H19.0838C19.2677 26.1008 19.4167 25.9514 19.4167 25.7674V18.9843H21.9051C22.089 18.9843 22.2379 18.8351 22.2379 18.6509L22.2389 15.9628C22.2389 15.8743 22.2038 15.7896 22.1415 15.727C22.0791 15.6644 21.9942 15.6292 21.9059 15.6292H19.4167V14.0564C19.4167 13.3005 19.5965 12.9167 20.5795 12.9167L22.0054 12.9162C22.1892 12.9162 22.3381 12.7669 22.3381 12.5828V10.0867C22.3381 9.90286 22.1894 9.75368 22.0058 9.75334Z"
                        fill="white"
                      ></path>
                    </svg>
                  </p>
                  <p className="tarmoq-oval">
                    <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M26.25 12.8482C25.6431 13.1191 24.9902 13.3024 24.3056 13.3842C25.0046 12.9626 25.5411 12.2954 25.7943 11.4991C25.1402 11.8897 24.4154 12.1731 23.6447 12.3259C23.0272 11.6638 22.1473 11.25 21.1731 11.25C19.3039 11.25 17.7879 12.7763 17.7879 14.6581C17.7879 14.9252 17.818 15.1852 17.876 15.4348C15.0627 15.2928 12.5682 13.936 10.8984 11.8735C10.6071 12.3767 10.44 12.9626 10.44 13.5871C10.44 14.7692 11.038 15.8128 11.9459 16.4238C11.3912 16.4063 10.8689 16.253 10.4127 15.997C10.4124 16.0115 10.4124 16.026 10.4124 16.0403C10.4124 17.6916 11.5798 19.0689 13.1281 19.3818C12.8443 19.4601 12.5447 19.5015 12.2364 19.5015C12.0178 19.5015 11.806 19.4804 11.5995 19.4407C12.0302 20.7944 13.2801 21.7798 14.7618 21.8075C13.603 22.7218 12.1435 23.2664 10.5571 23.2664C10.2844 23.2664 10.0143 23.2504 9.75 23.2187C11.2473 24.186 13.0271 24.75 14.9387 24.75C21.1653 24.75 24.5704 19.5569 24.5704 15.0528C24.5704 14.9052 24.5671 14.758 24.5606 14.6121C25.2225 14.1317 25.7963 13.5316 26.25 12.8482V12.8482Z"
                        fill="white"
                      ></path>
                    </svg>
                  </p>
                  <p className="tarmoq-oval">
                    <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M16.4545 19.6985C15.624 20.4982 15.7008 21.8498 16.6166 22.5502L20.1144 25.2256C21.2014 26.057 22.7842 25.4876 23.0925 24.1543L25.8448 12.2524C26.0159 11.5122 25.2849 10.8846 24.5792 11.1659L9.13474 17.3203C8.3204 17.6448 8.35268 18.8083 9.18374 19.0872L12.2411 20.1131C12.5199 20.2067 12.8264 20.1645 13.0697 19.9993L23.5126 12.903L16.4545 19.6985Z"
                        fill="white"
                      ></path>
                    </svg>
                  </p>
                </article>
                <article className="header-child-workDate">
                  <article className="workDate-wrapper">
                    <p className="workDate">
                      <svg width="25" height="28" viewBox="0 0 12 14" fill="none">
                        <path
                          d="M0.861328 5.50245H11.1444"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M8.5629 7.75559H8.56824"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M6.00284 7.75559H6.00818"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M3.4379 7.75559H3.44324"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M8.5629 9.99781H8.56824"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M6.00284 9.99781H6.00818"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M3.4379 9.99781H3.44324"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M8.33315 1.23077V3.12929"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M3.67299 1.23077V3.12929"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.44557 2.14184H3.56058C1.86634 2.14184 0.808105 3.08565 0.808105 4.82051V10.0415C0.808105 11.8036 1.86634 12.7692 3.56058 12.7692H8.44022C10.1398 12.7692 11.1927 11.82 11.1927 10.0851V4.82051C11.198 3.08565 10.1452 2.14184 8.44557 2.14184Z"
                          stroke="#FFFFFF"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        ></path>
                      </svg>
                    </p>
                    <p>Dushanba - Juma</p>
                  </article>
                  <article className="workDate-wrapper">
                    <p className="workDate">
                      <svg width="25" height="28" viewBox="0 0 12 12" fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.3367 6.00028C11.3367 8.94778 8.94761 11.3368 6.00011 11.3368C3.05261 11.3368 0.663574 8.94778 0.663574 6.00028C0.663574 3.05278 3.05261 0.663742 6.00011 0.663742C8.94761 0.663742 11.3367 3.05278 11.3367 6.00028Z"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        ></path>
                        <path
                          d="M7.97969 7.69782L5.80469 6.40032V3.60397"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                        ></path>
                      </svg>
                    </p>
                    <p>09:00 - 18:00</p>
                  </article>
                </article>
              </article>
            </div>
            <h1>Talablar :</h1>
            <br />
            <li>{vacansies.talab1}</li>
            <br />
            <li>{vacansies.talab2}</li>
            <br />
            <li>{vacansies.talab3}</li>
            <br />
            <h1>Vazifalar : </h1>
            <br />
            <li>{vacansies.vazifa1}</li>
            <br />
            <li>{vacansies.vazifa2}</li>
            <br />
            <li>{vacansies.vazifa3}</li>
            <br />
            <h1>Shartlar : </h1>
            <br />
            <li>{vacansies.shart1}</li>
            <br />
            <li>{vacansies.shart2}</li>
            <br />
            <li>{vacansies.shart3}</li>
            <br />
            <li>{vacansies.shart4}</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailVacansy;
