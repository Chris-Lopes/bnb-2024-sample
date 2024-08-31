import React from "react";

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
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {item.id}
              </h1>
            </div>
            <div
              className={`order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}>
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                {item.date}
              </h3>
              <h4 className="mb-3 font-bold text-gray-800">{item.title}</h4>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
