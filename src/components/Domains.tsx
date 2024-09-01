import Image from "next/image";
import React from "react";

const Domains = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen container mx-auto justify-between p-4">
      <div className="md:w-96 md:translate-y-[20px] text-center">
        <div className="md:w-96 md:h-96 shadow-lg shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-yellow-700 rounded-full">
          <Image
            src="/web_app_cookie.png"
            width={1000}
            height={1000}
            alt="web-app-dev"
          />
        </div>
        <h2 className="text-4xl pt-8 font-squid">WEB Developement</h2>
      </div>
      <div className="md:w-96 text-center">
        <div className="md:w-96 md:h-96 shadow-lg shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-yellow-700 rounded-full">
          <Image
            src="/blockchain_cookie.png"
            width={1000}
            height={1000}
            alt="blockchain"
          />
        </div>
        <h2 className="text-4xl pt-8 font-squid">Blockchain</h2>
      </div>
      <div className="md:w-96 text-center">
        <div className="md:w-96 md:h-96 shadow-lg shadow-yellow-700 hover:scale-105 ease-in-out duration-300 hover:shadow-lg hover:shadow-yellow-700 rounded-full">
          <Image src="/aiml_cookie.png" width={1000} height={1000} alt="aiml" />
        </div>
        <h2 className="text-4xl pt-8 font-squid">AIML</h2>
      </div>
    </div>
  );
};

export default Domains;
