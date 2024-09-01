
import React from "react";
import { Timeline } from "./acctimeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Registrations Open",
      content: <p className=""> some dates od the registrations </p>,
    },
    {
      title: "Registrations Closed",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Internal State Rounds Begin",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Internal State Rounds End",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Final Round Inauguration Ceremony Begins",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Hacking Begins",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Dinner Break",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Mentoring Session",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Hacking Ends",
      content: <p className="">some dates od the registrations</p>,
    },
    {
      title: "Final Round Cosing Ceremony Begins",
      content: <p className="">some dates od the registrations</p>,
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
