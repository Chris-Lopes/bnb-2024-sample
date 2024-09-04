import React from "react";
import Card from "./squidcard";
import Image from "next/image";
import PopFadeInSection from "./PopFadeInSection";
import FadeInSection from "./FadeInSection";

const Faq = () => {
  return (
    <div id="faq">
    <PopFadeInSection>
      <h1 className="md:text-8xl text-3xl md:pb-0 pb-10 md:translate-y-20 text-center font-squid ">
        FAQ
      </h1></PopFadeInSection>
      <div className="w-full min-h-screen flex flex-col gap-10 container mx-auto items-center justify-center ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 md:gap-20">
          <FadeInSection>
          <Card
            frontcontent={
              <div className="w-fit h-fit flex items-center justify-center">
                <Image
                  src="/Faq/Faq_1.png"
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
                  src="/Faq/Faq_1_ans.png"
                  alt="BitnBuild"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            }
          /></FadeInSection>
          <FadeInSection>
          <Card
            frontcontent={
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/Faq/Faq_2.png"
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
                  src="/Faq/Faq_2_ans.png"
                  alt="BitnBuild"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            }
          /> </FadeInSection> 
          <FadeInSection>
          <Card
            frontcontent={
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/Faq/Faq_3.png"
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
                  src="/Faq/Faq_3_ans.png"
                  alt="BitnBuild"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            }
          /> </FadeInSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 md:gap-20">
        <FadeInSection>
          <Card
            frontcontent={
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/Faq/Faq_4.png"
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
                  src="/Faq/Faq_4_ans.png"
                  alt="BitnBuild"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            }
          /> </FadeInSection> <FadeInSection>
          <Card
            frontcontent={
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/Faq/Faq_5.png"
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
                  src="/Faq/Faq_5_ans.png"
                  alt="BitnBuild"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            }
          /> </FadeInSection> <FadeInSection>
          <Card
            frontcontent={
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/Faq/Faq_6.png"
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
                  src="/Faq/Faq_6_ans.png"
                  alt="BitnBuild"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            }
          /> </FadeInSection>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 md:gap-20">
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
      </div> */}
      </div>
    </div>
  );
};

export default Faq;
