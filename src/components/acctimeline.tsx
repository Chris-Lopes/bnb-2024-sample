import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import FadeInSection from "./FadeInSection";
import PopFadeInSection from "./PopFadeInSection";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)),
      url('/overall_bg_1.png')
    `,
    backgroundSize: "contain%",
    backgroundPosition: "center",
    filter: "brightness(0.15)",
  };

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full relative  md:px-10" ref={containerRef}>
      <div
        className="absolute inset-0 -z-10 bg-contain min-h-screen bg-center"
        style={backgroundStyle}
      ></div>
      <PopFadeInSection>
      <h1 className="md:text-8xl w-full text-center text-5xl pt-32 font-squid">
        Timeline
      </h1>
      </PopFadeInSection>
      <div ref={ref} className="relative container mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <FadeInSection>
                <div className="h-10 absolute left-4 md:left-4 w-10 rounded-full bg-black border border-white  flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-thered border border-[hsl(341,71%,56%)] p-2" />
                </div>
              </FadeInSection>
              <FadeInSection>
                <h3 className="hidden font-squid md:block text-xl md:pl-20 md:text-5xl font-bold text-white ">
                  {item.title}
                </h3>
              </FadeInSection>
            </div>

            <div className="relative pl-20 pr-4 font-squid text-xl md:pl-4 md:text-5xl w-full md:w-fit">
              <FadeInSection>
                <h3 className="md:hidden font-squid block text-2xl mb-4 text-left font-bold text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </FadeInSection>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[7px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[7px] bg-gradient-to-t from-[hsl(341,71%,56%)] via-thered to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
