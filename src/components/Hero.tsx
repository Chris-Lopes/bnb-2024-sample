"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [showText, setShowText] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const targetDate = useMemo(() => new Date("2024-10-26T09:00:00"), []);

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5300);
    return () => clearTimeout(timer);
  }, []);

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div
      key={interval}
      className="flex flex-col items-center justify-center p-2 m-1"
    >
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm uppercase text-white opacity-75">
        {interval}
      </span>
    </div>
  ));

  return (
    <div className="h-screen w-full flex flex-col relative">
      <div
        className="h-full w-full flex flex-col justify-center items-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 1)),  url('/actualBg.png')`,
        }}
      >
        <div className="flex flex-col items-center justify-center mt-[30vh] space-y-6">
          {showText && (
            <Image
              src="/bnb_logo.png"
              alt="bnb logo"
              width={500}
              height={1000}
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
            className="text-3xl sm:text-4xl md:text-5xl font-squid font-bold text-white text-center"
          />
          {showText && (
            <div className="flex gap-4 justify-center mt-6">
              <button className="text-white bg-thered font-bold text-lg md:text-xl py-3 px-6 hover:scale-105 hover:bg-opacity-90 ease-in-out duration-300 font-squid rounded-full">
                Know More
              </button>
              <button className="text-white bg-thered font-bold text-lg md:text-xl py-3 px-6 hover:scale-105 hover:bg-opacity-90 ease-in-out duration-300 font-squid rounded-full">
                Register
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <div className="flex justify-center items-center space-x-4">
          <span className="text-white text-lg md:text-xl font-squid">
            Event Starts In:
          </span>
          <div className="flex space-x-2">
            {isClient ? timerComponents : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
