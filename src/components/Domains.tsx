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

  const domains = [
    { name: "WEB Development", image: "/web_app_cookie.png" },
    { name: "Blockchain", image: "/blockchain_cookie.png" },
    { name: "AIML", image: "/aiml_cookie.png" },
  ];

  return (
    <div id="domains" className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundStyle}
      ></div>
      <div className="relative flex flex-col justify-center items-center py-20">
        <PopFadeInSection>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white pb-10 md:pb-16 text-center font-squid">
            Domains
          </h1>
        </PopFadeInSection>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-8 container mx-auto px-4">
          {domains.map((domain, index) => (
            <FadeInSection key={index}>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto shadow-lg shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-xl hover:shadow-yellow-600 rounded-full overflow-hidden">
                  <Image
                    src={domain.image}
                    width={1000}
                    height={1000}
                    alt={domain.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl text-white pt-6 font-squid">
                  {domain.name}
                </h2>
              </div>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection>
          <button className="text-white bg-thegreen font-bold text-lg md:text-xl py-3 px-6 mt-16 md:mt-20 hover:scale-105 hover:bg-opacity-75 ease-in-out duration-300 font-squid rounded-full">
            Problem Statements
          </button>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Domains;
