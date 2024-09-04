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
      <div className="relative min-h-screen py-20 mb-10">
        <PopFadeInSection>
          <h1 className="md:text-8xl text-3xl mb-10 text-center font-squid ">
            Prizes!
          </h1>
        </PopFadeInSection>
        <FadeInSection>
          <div className="flex md:flex-row flex-col w-full justify-between container md:gap-0 gap-10 mx-auto text-center items-center">
            <div className="">
              <Image
                src="/prize2.png"
                alt="prize2"
                height={10000}
                width={10000}
                className="w-full md:mt-60 rounded-full shadow-lg hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-thered shadow-thered mb-6"
              />
              <h2 className="text-4xl font-squid">
                2nd Prize <br /> 25,000₹
              </h2>
            </div>
            <div className="">
              <Image
                src="/prize1.png"
                alt="prize1"
                height={10000}
                width={10000}
                className="w-full rounded-full shadow-lg shadow-thered mb-6 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-thered"
              />
              <h2 className="text-4xl font-squid">
                1st Prize <br /> 50,000₹
              </h2>
            </div>
            <div className="">
              <Image
                src="/prize3.png"
                alt="prize3"
                height={10000}
                width={10000}
                className="w-full md:mt-60 rounded-full shadow-lg shadow-thered mb-6 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-thered"
              />
              <h2 className="text-4xl font-squid">
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
