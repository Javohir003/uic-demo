import Image from "next/image";
import Fire from "/public/icons/olov.png";
import styles from "./style.module.css";

export default function Mani() {
  return (
    <div className="container">
      <div className="relative mb-16">
        <div className={`${styles.solder}`}></div>
        <div className="w-[100%] h-[30%] lg:h-[20%] absolute -z-2 bottom-[25px] bg-custom-radial"></div>
        <div className="container h-screen mt-[50px]">
          <div className="absolute bottom-0">
            <span className="mb-6 flex gap-2 items-center bg-[#202123] w-[330px] rounded-full text-white text-sm py-3 px-4 font-sans md:text-xs">
              <Image
                src={Fire}
                alt="FireLogo"
                className="drop-shadow-custom-yellow"
              />
              Working day & night to bring out the best results
            </span>
            <h1 className="mb-12 md:mb-16 lg:mb-[150px] xl:mb-[268px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-white tracking-wider">
              YOUR{" "}
              <span className="relative text-blue-500 border border-blue-500 inline-block mb-2">
                IDEAS
              </span>{" "}
              WILL <br /> BECOME A{" "}
              <span className="relative text-blue-500 border border-blue-500 inline-block">
                REALITY
              </span>
            </h1>
            <p className=" text-white font-sans text-base pb-14 ">
              UIC Games is a game development company founded in 2018. It
              focuses on creating engaging and immersive video games,
              <br />
              combining technology with creative storytelling to deliver unique
              gaming experiences
            </p>
          </div>
          <div className="absolute -z-2 inset-0 bg-gradient-to-b from-transparent to-black shadow-inner"></div>
        </div>
      </div>
    </div>
  );
}
