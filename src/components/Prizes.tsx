import Image from "next/image";
import React from "react";

const Prizes = () => {
  return (
    <>
    <h1 className="text-8xl text-center">Prizes!</h1>
      <div className="flex md:flex-row flex-col w-full justify-between container mx-auto text-center items-center">
        <div className="">
          <Image
            src="/prize2.png"
            alt="prize2"
            height={1000}
            width={1000}
            className="w-full md:mt-60"
          />
          <h2 className="text-4xl">2nd Prize <br /> 25,000₹</h2>
        </div>
        <div className="">
          <Image
            src="/prize1.png"
            alt="prize1"
            height={1000}
            width={1000}
            className="w-full"
          />
          <h2 className="text-4xl">1st Prize <br /> 50,000₹</h2>
        </div>
        <div className="">
          <Image
            src="/prize3.png"
            alt="prize3"
            height={1000}
            width={1000}
            className="w-full md:mt-60"
          />
          <h2 className="text-4xl">3rd Prize <br /> 10,000₹</h2>
        </div>
      </div>
    </>
  );
};

export default Prizes;
