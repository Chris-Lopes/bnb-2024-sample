import React from "react";
import Card from "./squidcard";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="w-full min-h-max gap-10 flex container mx-auto">
      <Card
        frontcontent={
          <div className="relative min-w-[55%] h-full items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex  items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        frontcontent={
          <div className="relative flex flex-col items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex flex-col items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        frontcontent={
          <div className="relative flex flex-col items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex flex-col items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        frontcontent={
          <div className="relative flex flex-col items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex flex-col items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        frontcontent={
          <div className="relative flex flex-col items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex flex-col items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        frontcontent={
          <div className="relative flex flex-col items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex flex-col items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
      <Card
        frontcontent={
          <div className="relative flex flex-col items-center">
            <Image
              src="/squidcardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
        backcontent={
          <div className="flex flex-col items-center">
            <Image
              src="/cardbg.png"
              alt="BitnBuild"
              width={1000}
              height={1000}
            />
          </div>
        }
      />
    </div>
  );
};

export default Faq;
