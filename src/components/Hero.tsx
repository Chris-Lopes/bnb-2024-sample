import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 5300);
  }, []);

  return (
    <div className="h-screen w-full flex flex-row md:flex-col lg:flex-col">
      <div
        className="h-full w-full flex justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 1)),  url('/actualBg.png')`,
        }}
      >
        <div className="flex-col justify-center mt-[50vh]">
          {showText && (
            <Image
              src={"/bnb_logo.png"}
              alt="bnb logo"
              width={700}
              height={600}
              quality={100}
              priority
              className="ease-in-out duration-300"
            />
          )}

          <ReactTyped
            strings={["WELCOME!", "ARE YOU READY?", "PICK YOUR POISON"]}
            typeSpeed={50}
            backSpeed={30}
            showCursor={false}
            backDelay={500}
            loop={false}
            
            className="text-4xl sm:text-2xl md:text-5xl font-squid font-bold flex justify-center text-white"
          />
          {showText && (
            <div className="flex gap-10  justify-center duration-200 ease-in-out mt-6">
              <button className=" text-white bg-thered font-bold md:text-xl py-4 hover:scale-105 hover:bg-opacity-75 ease-in-out duration-300 px-6 font-squid rounded-full ">
                know more
              </button>
              <button className=" text-white bg-thered font-bold md:text-xl py-4 hover:scale-105 hover:bg-opacity-75 ease-in-out duration-300 px-6 font-squid rounded-full  ">
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
/*
<div className="hero-section bg-gradient-to-r from-indigo-600 to-blue-500 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our</h1>

        <ReactTyped
          strings={[
            "Here you can find anything",
            "Search for products",
            "Search for categories",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="text-3xl md:text-5xl font-bold text-yellow-300"
        />
        <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto">
          Empowering businesses with cutting-edge technology and creative
          strategies.
        </p>
        <div className="mt-8">
          <a
            href="#learn-more"
            className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 hover:text-indigo-700 transition duration-300">
            Learn More
          </a>
        </div>

        <div>
          <button onClick={() => typed?.start()}>Start</button>
          <button onClick={() => typed?.stop()}>Stop</button>
          <button onClick={() => typed?.toggle()}>Toggle</button>
          <button onClick={() => typed?.destroy()}>Destroy</button>
          <button onClick={() => typed?.reset()}>Reset</button>
          <ReactTyped
            typedRef={setTyped}
            strings={["Here you can find anything"]}
            typeSpeed={40}
          />
        </div>
      </div>
    </div>
*/
