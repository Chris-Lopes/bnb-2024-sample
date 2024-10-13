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
      content: <p className="">Live - 19TH October</p>,
    },
    {
      title: "RELEASE OF PROBLEM STATEMENT [Maharashtra]",
      content: <p className="">19TH OCTOBER 4:30 PM</p>,
    },
    {
      title: "HACKATHON BEGINS",
      content: <p className="">19TH OCTOBER 5:00 PM</p>,
    },
    {
      title: "SUBMIT YOUR GITHUB REPOSITORY",
      content: <p className="">19TH OCTOBER 5:00 PM - 6:00 PM</p>,
    },
    {
      title: "MENTORING SESSION BEGINS",
      content: <p className="">19TH OCTOBER 9:00 PM</p>,
    },
    {
      title: "JUDGING ROUNDS 1 &2",
      content: <p className="">20TH OCTOBER 9:00 AM</p>,
    },
    {
      title: "RESULT DECLARATION",
      content: <p className="">20TH OCTOBER 5:00 PM</p>,
    },
    {
      title: "HACKATHON ENDS",
      content: <p className="">20TH OCTOBER 5:00 PM</p>,
    },
  ];
  return (
    <div id="timeline" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
