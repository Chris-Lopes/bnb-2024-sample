"use client";
import Image from "next/image";
import localFont from "next/font/local";
import React, { useState, useEffect } from "react";
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
import Faq from "@/components/Faq";
import Loading from "./loading";
import ContactUs from "@/components/contactUs";
//style={{ backgroundImage: 'url("/actualBg.png")', }}
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 5200); // n-second delay to simulate loading
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <HeroSection />

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
      <ContactUs />
      <Sponsers />

      <Faq />
    </main>
  );
}
