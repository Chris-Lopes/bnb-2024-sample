import React, { useState } from "react";
interface CardProps {
  frontcontent: React.ReactNode;
  backcontent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ frontcontent, backcontent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div
        className={`relative md:w-[21vw] md:h-[24vh] w-[75vw] h-[19vh] card cursor-pointer ${
          isFlipped ? "card-front-flip" : "card-back-flip"
        }`}
        onClick={handleFFlip}
      >
        {
          <div className="absolute card-front w-fit h-fit inset-0 text-black flex items-center justify-center rounded-lg ">
            <div className="flex text-5xl">{frontcontent}</div>
          </div>
        }
        {
          <div className="absolute card-back w-fit h-fit inset-0 text-black flex items-center justify-center rounded-lg ">
            {backcontent}
          </div>
        }
      </div>

      <style jsx>{`
        .card {
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: 0.5s;
        }
        .card-front-flip {
          transform: rotateX(-180deg);
        }
        .card-back-flip {
          transform: rotateX(0deg);
        }

        .card-front {
          backface-visibility: hidden;
          transform: rotateX(0deg);
          transition: 0.5s;
        }

        .card-back {
          backface-visibility: hidden;
          transform: rotateX(180deg);
          transition: 0.5s;
        }
      `}</style>
    </>
  );
};

export default Card;
