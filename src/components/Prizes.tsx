import Image from "next/image";
import React from "react";

const Prizes = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url('/prize_bg.png')`,
    filter: "brightness(0.15)",
  };

  return (
    <div className="relative min-h-screen py-20 mb-10">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={backgroundStyle}
      ></div>
      <h1 className="text-8xl text-center ">Prizes!</h1>
      <div className="flex md:flex-row flex-col w-full justify-between container mx-auto text-center items-center">
        <div className="">
          <Image
            src="/prize2.png"
            alt="prize2"
            height={10000}
            width={10000}
            className="w-full md:mt-60 rounded-full shadow-lg hover:scale-105 ease-in-out duration-300 hover:shadow-xl hover:shadow-thered shadow-thered mb-6"
          />
          <h2 className="text-4xl">
            2nd Prize <br /> 25,000₹
          </h2>
        </div>
        <div className="">
          <Image
            src="/prize1.png"
            alt="prize1"
            height={10000}
            width={10000}
            className="w-full rounded-full shadow-lg shadow-thered mb-6 hover:scale-105 ease-in-out duration-300 hover:shadow-xl hover:shadow-thered"
          />
          <h2 className="text-4xl">
            1st Prize <br /> 50,000₹
          </h2>
        </div>
        <div className="">
          <Image
            src="/prize3.png"
            alt="prize3"
            height={10000}
            width={10000}
            className="w-full md:mt-60 rounded-full shadow-lg shadow-thered mb-6 hover:scale-105 ease-in-out duration-300 hover:shadow-xl hover:shadow-thered"
          />
          <h2 className="text-4xl">
            3rd Prize <br /> 10,000₹
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
