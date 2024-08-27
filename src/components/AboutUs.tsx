import React from "react";

interface AboutUsProps {
  imageUrl: string;
  title: string;
  description: string[];
}

const AboutUs: React.FC<AboutUsProps> = ({ imageUrl, title, description }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={imageUrl}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-squid flex justify-center font-bold mb-4">{title}</h2>
        {description.map((description,id) => (
          <p key={id} className="text-gray-400 pb-3">{description}</p>
        ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
