import { useState } from "react";

const Card: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
 const HandleFlip = () => {
    setFlipped(!flipped);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div
        className={`relative w-48 h-28 cursor-pointer perspective ${
          flipped ? "flipped" : ""
        }`}
        onClick={HandleFlip}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-gray-100 text-black flex items-center justify-center rounded-lg transform transition-transform duration-500 preserve-3d">
          <div className="flex space-x-4 text-5xl">
            <div>○</div>
            <div>△</div>
            <div>□</div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gray-900 text-white flex items-center justify-center rounded-lg transform transition-transform duration-500 preserve-3d rotate-y-180">
          <p>Join the Game!</p>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .flipped .front {
          transform: rotateY(180deg);
        }

        .flipped .back {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
};

export default Card;
