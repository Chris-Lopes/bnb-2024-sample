'use client'
import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import HeroSection from "@/components/Hero";
import Accordion from "@/components/Accordian";
import {Footer }from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
//style={{ backgroundImage: 'url("/actualBg.png")', }}
export default function Home() {
  return (
    <main>
      <div
        className="w-full h-screen flex-col justify-center"
        style={{ backgroundImage: 'url("/actualBg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className=" fixed top-3/4 w-full h-full">
          <div className="z-10"><HeroSection /></div>
        </div>
        
      </div>
      <div>
        <AboutUs
          imageUrl="/Map Wrap.png"
          title="About Us"
          description={[
            "Welcome to BitnBuild 2024, a global hackathon in Mumbai! A 24-hour event full of creativity, Squid Games.",
            "BitnBuild is your chance to shine as a developer. Are you ready to compete with the best and unlock your potential?",
          ]}
        />
      </div>
      <div>
        <Accordion />
      </div>
    </main>
  );
};


