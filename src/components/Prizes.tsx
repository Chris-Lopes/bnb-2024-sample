import Image from "next/image";
import React from "react";
import PopFadeInSection from "./PopFadeInSection";
import FadeInSection from "./FadeInSection";

const Prizes = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),
      url('/prize_bg.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.15)",
  };

  return (
    <div id="prizes" className="relative">
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={backgroundStyle}
      ></div>
      <div className="relative min-h-screen py-20 pb-10">
        <PopFadeInSection>
          <h1 className="md:text-8xl text-white text-5xl mb-10 text-center font-squid ">
            Prizes!
          </h1>
        </PopFadeInSection>
        <FadeInSection>
          <div className="flex md:flex-row flex-col md:w-full w-[80%] justify-between container md:gap-0 gap-10 mx-auto text-center items-center">
            <div className="md:order-2 order-1">
              <Image
                src="/prize1.png"
                alt="prize1"
                width={300}
                height={300}
                className="w-48 md:w-64 lg:w-80 mx-auto rounded-full shadow-lg shadow-thered mb-6 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-thered"
              />
              <h2 className="text-3xl md:text-4xl text-white font-squid">
                1st Prize <br /> 50,000₹
              </h2>
            </div>
            <div className="md:order-1 order-2">
              <Image
                src="/prize2.png"
                alt="prize2"
                width={250}
                height={250}
                className="w-40 md:w-56 lg:w-72 mx-auto md:mt-20 rounded-full shadow-lg hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-thered shadow-thered mb-6"
              />
              <h2 className="text-3xl md:text-4xl text-white font-squid">
                2nd Prize <br /> 35,000₹
              </h2>
            </div>
            <div className="md:order-3 order-3">
              <Image
                src="/prize3.png"
                alt="prize3"
                width={200}
                height={200}
                className="w-32 md:w-48 lg:w-64 mx-auto md:mt-40 rounded-full shadow-lg shadow-thered mb-6 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-thered"
              />
              <h2 className="text-3xl md:text-4xl text-white font-squid">
                3rd Prize <br /> 10,000₹
              </h2>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Prizes;
