import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";
import PopFadeInSection from "./PopFadeInSection";

const Domains = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),
      url('/domain_bg.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.15)",
  };

  return (
    <div id="domains" className="relative">
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={backgroundStyle}
      ></div>

      <div className="relative flex flex-col justify-center items-center">
        <PopFadeInSection>
          <h1 className="md:text-8xl text-white text-6xl md:pb-0 pb-10 md:translate-y-20 text-center font-squid ">
            Domains
          </h1>
        </PopFadeInSection>
        <div className="relative min-h-screen flex flex-col md:gap-0 gap-10 md:flex-row items-center container mx-auto justify-between ">
          <FadeInSection>
            <div className="md:w-96 w-fit md:translate-y-[20px]  text-center">
              <div className="md:w-96 md:h-96 w-72 h-72 shadow-lg mx-auto shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-yellow-700 rounded-full">
                <Image
                  src="/web_app_cookie.png"
                  width={1000}
                  height={1000}
                  alt="web-app-dev"
                />
              </div>

              <h2 className="text-3xl text-white pt-8 font-squid">WEB Developement</h2>
            </div>
          </FadeInSection>
          <div className="md:w-96 w-72 text-center">
          <FadeInSection>
            <div className="md:w-96 md:h-96 w-72 h-72 shadow-lg shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-yellow-700 rounded-full">
              <Image
                src="/blockchain_cookie.png"
                width={1000}
                height={1000}
                alt="blockchain"
              />
            </div>
            <h2 className="text-3xl text-white pt-8 font-squid">Blockchain</h2>
          </FadeInSection>
          </div>
          <div className="md:w-96 w-72 text-center">
          <FadeInSection>
            <div className="md:w-96 md:h-96 w-72 h-72 shadow-lg shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-yellow-700 rounded-full">
              <Image
                src="/aiml_cookie.png"
                width={1000}
                height={1000}
                alt="aiml"
              />
            </div>
            <h2 className="text-3xl text-white pt-8 font-squid">AIML</h2>
            </FadeInSection>
          </div>
        </div>
        <FadeInSection>
        <button className="md:-translate-y-20 text-white bg-thegreen font-bold md:text-xl py-4 md:my-0 mt-10 hover:scale-105 hover:bg-opacity-75 ease-in-out duration-300 px-6 font-squid rounded-full  ">
          Problem Statements
        </button>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Domains;
