import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

interface AboutUsProps {
  imageUrl: string;
  title: string;
  description: string[];
}

const AboutUs: React.FC<AboutUsProps> = ({ imageUrl, title, description }) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),
      url('/about_bg.jpeg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.15)",
  };
  

  return (
    <section id="about" className="  flex justify-center items-center relative text-center">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={backgroundStyle}
        ></div>
        <FadeInSection>
      <div className="flex min-h-screen flex-col md:flex-row container mx-auto items-center gap-10 justify-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={imageUrl}
            height={10000}
            width={10000}
            alt="About Us"
            className="w-full h-auto rounded-lg "
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-5xl font-squid flex justify-center font-bold mb-4">{title}</h2>
        {description.map((description,id) => (
          <p key={id} className="text-gray-100 font-sharp text-2xl pb-3">{description}</p>
        ))}
        </div>
      </div>
    </FadeInSection>
    </section>
  );
};

export default AboutUs;
