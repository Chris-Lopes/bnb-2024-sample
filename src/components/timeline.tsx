
import React from "react";
import { Timeline } from "./acctimeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Registrations",
      content: <p className=""> Live - 5 October </p>,
    },
    // {
    //   title: "Registrations Closed",
    //   content: <p className="">5 October</p>,
    // },
    {
      title: "Internal State Rounds",
      content: <p className="">12 October - 13 October</p>,
    },
    // {
    //   title: "Internal State Rounds End",
    //   content: <p className="">13 October</p>,
    // },
    {
      title: "Final Round Inauguration Ceremony Begins",
      content: <p className="">26th October 2 pm</p>,
    },
    {
      title: "Hacking Begins",
      content: <p className="">26th October 2:30 pm</p>,
    },
    {
      title: "Mentoring Session",
      content: <p className="">26th October 7 pm</p>,
    },
    {
      title: "Dinner Break",
      content: <p className="">26th October 9 pm</p>,
    },
    {
      title: "Hacking Ends",
      content: <p className="">27th October 11 am</p>,
    },
    {
      title: "Final Round Cosing Ceremony Begins",
      content: <p className="">27th October 4 pm</p>,
    },
  ];
  return (
    <div id="timeline" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
