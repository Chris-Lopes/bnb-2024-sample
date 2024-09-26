import React from "react";
import PopFadeInSection from "./PopFadeInSection";
import FadeInSection from "./FadeInSection";
import Image from "next/image";
import Link from "next/link";
const prevsponsers = [
  { name: "RedBull", image: "/sponsors/RB.jpg" },
  { name: "368", image: "/sponsors/368.png" },
  { name: "Edusphere", image: "/sponsors/edussphere.png" },
  { name: "GeeksforGeeks", image: "/sponsors/gfg.jpeg" },
  { name: "JDoodle", image: "/sponsors/jdoodle.png" },
  { name: "Give My Certificate", image: "/sponsors/gmc.png" },
  { name: "noescape", image: "/sponsors/noescape.jpg" },
  { name: "Postman", image: "/sponsors/postman.jpg" },
  { name: "Simply Gaming", image: "/sponsors/simplygameing.png" },
  { name: "Startup News", image: "/sponsors/startupnews.jpeg" },
  { name: "Unstop", image: "/sponsors/unstop.png" },
];
const Sponsers = () => {
  return (
    <div
      id="sponsors"
      className="flex bg-black flex-col justify-center items-center w-full "
    >
      <PopFadeInSection>
        <h1 className="md:text-8xl text-white w-full text-center text-4xl mb-20 font-squid">
          Our Sponsors
        </h1>
      </PopFadeInSection>
      <div>
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
              <span className=" inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
                TITLE
              </span>
            </h2>
          </FadeInSection>
          <p className="text-2xl text-white font-sharp"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
                ASSOCIATE
              </span>
            </h2>
          </FadeInSection>
          <p className="text-2xl text-white font-sharp"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
                POWERED BY
              </span>
            </h2>
          </FadeInSection>
          <p className="text-2xl text-white font-sharp"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
                PLATINUM
              </span>
            </h2>
          </FadeInSection>
          <p className="text-2xl text-white font-sharp"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
                GOLD
              </span>
            </h2>

            <div className="flex justify-center max-md:items-center space-y-2 md:flex-row flex-col md:space-x-4 mt-4 mx-4">
              <div className="max-w-full mx-auto h-1/5 justify-center">
                <Link href="https://devfolio.co">
                  <Image
                    src="/sponsors/devfolio.png"
                    alt="DEVFOLIO LOGO"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
              </div>

              <div className="max-w-full mx-auto h-1/5 justify-center">
                <Link href="https://ethindia.co">
                  <Image
                    src="/sponsors/eth.png"
                    alt="ETHINDIA LOGO"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
              </div>
              <div className="max-w-full mx-auto h-1/5 justify-center">
                <Link href="https://polygon.technology">
                  <Image
                    src="/sponsors/polygon.png"
                    alt="POLYGON LOGO"
                    width={500}
                    height={500}
                    quality={100}
                  />
                </Link>
              </div>
            </div>
          </FadeInSection>
          <p className="text-2xl text-white font-sharp"> Yet To Come</p>
        </div>
        <div className="text-center mb-10">
          <FadeInSection>
            <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
              <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
                SILVER
              </span>
            </h2>
          </FadeInSection>
          <p className="text-2xl text-white font-sharp"> Yet To Come</p>
        </div>
      </div>
      {/* <h1 className="md:text-8xl text-3xl mb-20 font-squid">
        Previous Sponsers
      </h1> */}
      <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <PopFadeInSection>
            <h2 className="md:text-8xl  text-5xl font-squid text-gray-200 text-center mb-8">
              Previous Sponsors
            </h2>
          </PopFadeInSection>
          <div className="md:grid flex flex-col grid-cols-2 md:gap-8 md:grid-cols-4 ">
            {prevsponsers.map((sponsor) => (
              <div
                key={sponsor.name}
                className="col-span-1 flex justify-center items-center bg-transparent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FadeInSection>
                  <img
                    className="h-full max-w-full object-contain md:w-full w-[90vw]"
                    src={sponsor.image}
                    alt={sponsor.name}
                  />
                </FadeInSection>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
