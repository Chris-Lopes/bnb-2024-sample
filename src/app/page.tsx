"use client";
import Image from "next/image";
import localFont from "next/font/local";
import React from "react";
import HeroSection from "@/components/Hero";
import Accordion from "@/components/Accordian";
import { Footer } from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/hero2";
import VerticalTimeline from "@/components/timeline2";
import { TimelineDemo } from "@/components/timeline";
import Sponsers from "@/components/Sponsers";
import Prizes from "@/components/Prizes";
import Card from "@/components/squidcard";
import Domains from "@/components/Domains";
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
          imageUrl="/Map_wrap.png"
          title="About Us"
          description={[
            "Welcome to BitnBuild 2024, a global hackathon in Mumbai! A 24-hour event full of creativity, Squid Games.",
            "BitnBuild is your chance to shine as a developer. Are you ready to compete with the best and unlock your potential?",
          ]}
        />
      </div>
      <Domains />

      <div>
        <TimelineDemo />
      </div>
      <Prizes />
      <Sponsers />
      <div>
        <Accordion />
      </div>
      
      {/* <div className="w-full h-full text-slate-50">
        <Card
          frontcontent={
            <div className="flex flex-col items-center">
              <Image
                src="/bnb logo.png"
                alt="BitnBuild"
                width={700}
                height={600}
              />
              <h1 className="text-3xl font-squid">BitnBuild</h1>
              <p className="text-lg">Organised by GDSC-CRCE</p>
            </div>
          }
          backcontent={
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">About Us</h1>
              <p className="text-lg">
                We are a community of developers who love to code and build
                projects.
              </p>
            </div>
          }
        />
      </div> */}
     
    </main>
  );
}
