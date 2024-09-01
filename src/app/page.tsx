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
import Sponsers from "@/components/Sponsers";
import Prizes from "@/components/Prizes";
import Card from "@/components/squidcard";
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
      {/* Domains */}
      <Prizes />

      <div>
        <VerticalTimeline />
      </div>
      <Sponsers />
      <div>
        <Accordion />
      </div>
      <div className="flex-col justify-center my-20 space-x-[500px]">
        <Card
          frontcontent={
            <Image
              src="/squidcard.png"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          }
          backcontent={
            <div className="bg-[url('/squidcardtexture.png')] bg-repeat px-16 py-8">
              <h1>
                1st prize <br />
                <span> 50,000 </span>
              </h1>
            </div>
          }
        />

        <Card
          frontcontent={
            <Image
              src="/bnb logo.png"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          }
          backcontent={
            <div className="bg-[url('/squidcardtexture.png')] bg-repeat px-16 py-8">
              <h1>
                2nd prize <br />
                <span> 25,000 </span>
              </h1>
            </div>
          }
        />
      </div>
    </main>
  );
}
