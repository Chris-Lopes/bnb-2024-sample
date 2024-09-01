import React, { useEffect, useRef } from "react";

interface TimelineItem {
    id: number;
    date: string;
    title: string;
    content: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const isScrolling = useRef(false);

    const handleScroll = () => {
        isScrolling.current = true;
    };

    useEffect(() => {
        const timelineElement = timelineRef.current;

        if (timelineElement) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate-slide-in");
                        } else {
                            entry.target.classList.remove("animate-slide-in");
                        }
                    });
                },
                { threshold: 0.5 } // Adjust the threshold as needed
            );

            const timelineItems = timelineElement.querySelectorAll(".timeline-item");

            timelineItems.forEach((item) => {
                observer.observe(item);
            });

            const handleScroll = () => {
                isScrolling.current = true;
            };

            timelineElement.addEventListener("scroll", handleScroll);

            return () => {
                observer.disconnect();
                timelineElement.removeEventListener("scroll", handleScroll);
            };
        }
    }, [isScrolling]);

    return (
      <div
        className="container mx-auto w-full h-full"
        ref={timelineRef}>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20  h-full border left-1/2 "></div>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } timeline-item`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full bg-pink-500 bg-cover bg-center"
              style={{backgroundImage:'bnb logo.png'}}>
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {item.id}
                </h1>
              </div>
              <div
                className={`timeline-item order-1 bg-transparent rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                  index % 2 === 0 ? "text-right items-right" : "text-left items-left "
                }`}>
                <h3 className="mb-3 font-bold text-gray-100 text-xl">
                  {item.date}
                </h3>
                <h4 className="mb-3 font-bold text-gray-300">{item.title}</h4>
                <p className="text-sm leading-snug tracking-wide text-gray-50 text-opacity-100">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

const VerticalTimeline: React.FC = () => {
     const timelineItems: TimelineItem[] = [
       {
         id: 1,
         date: "May 2023",
         title: "Rehistrations Open",
         content: "Description of event 1",
       },
       {
         id: 2,
         date: "June 2023",
         title: "Registration Close",
         content: "Description of event 2",
       },
       {
         id: 3,
         date: "July 2023",
         title: "Internal rounds start",
         content: "Description of event 3",
       },
       {
         id: 4,
         date: "August 2023",
         title: "internal Rounds End",
         content: "Description of event 4",
       },
       {
         id: 5,
         date: "September 2023",
         title: "final round inaguration ceremony begins",
         content: "Description of event 5",
       },
       {
         id: 6,
         date: "October 2023",
         title: "Hacking Begins",
         content: "Description of event 6",
       },
       {
         id: 7,
         date: "November 2023",
         title: "Dinner Break",
         content: "Description of event 7",
       },
       {
         id: 8,
         date: "December 2023",
         title: "Mentoring Session",
         content: "Description of event 8",
       },
       {
         id: 9,
         date: "January 2024",
         title: "Hacking Ends",
         content: "Description of event 9",
       },
       {
         id: 10,
         date: "February 2024",
         title: "Judging Begins",
         content: "Description of event 10",
       },
       {
         id: 11,
         date: "March 2024",
         title: "Winners Announced in Closing Ceremony",
         content: "Description of event 11",
       },
       {
         id: 12,
         date: "April 2024",
         title: "Event 12",
         content: "Description of event 12",
       },
     ];

    return (
        <div className="App">
            <Timeline items={timelineItems} />
        </div>
    );
};

export default VerticalTimeline;
