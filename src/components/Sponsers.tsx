import React from "react";
const prevsponsers = [
  { name: "368", image: "/sponsors/368.png" },
  { name: "Edusphere", image: "/sponsors/edusphere.png" },
  { name: "GeeksforGeeks", image: "/sponsors/gfg.jpeg" },
  { name: "JDoodle", image: "/sponsors/jdoodle.png" },
  { name: "Give My Certificate", image: "/sponsors/gmc.png" },
  { name: "noescape", image: "/sponsors/noescape.jpg" },
  { name: "Postman", image: "/sponsors/postman.png" },
  { name: "Simply Gaming", image: "/sponsors/simplygaming.png" },
  { name: "Startup News", image: "/sponsors/startupnews.jpeg" },
  { name: "Unstop", image: "/sponsors/unstop.png" },
];
const Sponsers = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <h1 className="md:text-8xl text-3xl mb-20 font-squid">Our Sponsers</h1>
      <div>
        <div className="text-center mb-10">
          <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
            <span className=" inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
              TITLE
            </span>
          </h2>
          <p className="text-2xl"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
              ASSOCIATE
            </span>
          </h2>
          <p className="text-2xl"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
              POWERED BY
            </span>
          </h2>
          <p className="text-2xl"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
              PLATINUM
            </span>
          </h2>
          <p className="text-2xl"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
              GOLD
            </span>
          </h2>
          <p className="text-2xl"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
              SILVER
            </span>
          </h2>
          <p className="text-2xl"> Yet To Come</p>
        </div>
      </div>
      {/* <h1 className="md:text-8xl text-3xl mb-20 font-squid">
        Previous Sponsers
      </h1> */}
      <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-squid text-gray-200 text-center mb-8">
            Our Previous Sponsors
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {prevsponsers.map((sponsor) => (
              <div
                key={sponsor.name}
                className="col-span-1 flex justify-center items-center bg-transparent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  className="max-h-16 max-w-full object-contain"
                  src={sponsor.image}
                  alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
