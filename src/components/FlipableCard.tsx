import React, { useState } from "react";

interface CardProps {
  frontTitle: string;
  frontContent: string;
  backTitle: string;
  backContent: string;
  icon: React.ReactNode;
}

const FlippableCard: React.FC<CardProps> = ({
  frontTitle,
  frontContent,
  backTitle,
  backContent,
  icon,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full sm:w-64 h-80 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}>
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl">{icon}</div>
            <h2 className="text-xl font-semibold">{frontTitle}</h2>
          </div>
          <p className="text-gray-600 flex-grow">{frontContent}</p>
          <button
            onClick={handleFlip}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Flip
          </button>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden bg-blue-500 text-white shadow-lg rounded-lg p-6 flex flex-col rotate-y-180">
          <h2 className="text-xl font-semibold mb-4">{backTitle}</h2>
          <p className="flex-grow">{backContent}</p>
          <button
            onClick={handleFlip}
            className="mt-4 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Flip Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
