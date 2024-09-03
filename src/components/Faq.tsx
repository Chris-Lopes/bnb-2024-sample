import React from 'react';
import Card from './squidcard';
import Image from 'next/image';

const Faq = () => {
  return (
    <>
     <h1 className="md:text-8xl text-3xl md:pb-10 pb-10 md:translate-y-20 text-center font-squid ">
          FAQ
        </h1>
    <div className="w-full min-h-screen flex flex-col gap-10 container mx-auto items-center justify-center ">
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 md:gap-20">
        <Card
          frontcontent={
            <div className="w-fit h-fit flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-fit h-fit flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 md:gap-20">
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 md:gap-20">
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
        <Card
          frontcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/squidcardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
          backcontent={
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/cardbg.png"
                alt="BitnBuild"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          }
        />
      </div>
    </div>
    </>
  );
};

export default Faq;
