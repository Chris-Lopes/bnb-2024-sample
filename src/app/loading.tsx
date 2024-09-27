// components/Loading.js
"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Loading = dynamic(() => import("../components/LoadingComponent"), {
  ssr: false,
});

const LoadingComponent = () => {
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    // After n seconds, trigger fade-out effect
    const timeout = setTimeout(() => setFade("fade-out"), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex h-screen text-white items-center justify-center ${fade}`}
    >
      <Loading />
      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 2s forwards;
        }
        .fade-out {
          opacity: 1;
          animation: fadeOut 1s forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingComponent;
