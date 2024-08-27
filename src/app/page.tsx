'use client'
import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import HeroSection from "@/components/Hero";
import Accordion from "@/components/Accordian";
import {Footer }from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/hero2";
//style={{ backgroundImage: 'url("/actualBg.png")', }}
export default function Home() {
  return (
    <main>
      
        <div className="h-screen flex-row-reverse align-bottom items-end">
          <div className="z-10"> 
            {/* <Hero/> */}
            <HeroSection /> 
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


