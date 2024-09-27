"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { University, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const RegistrationPopup = () => {
  const applyButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-white bg-thered font-bold text-lg md:text-xl py-3 px-6 hover:scale-105 hover:bg-opacity-90 ease-in-out duration-300 font-squid rounded-full">
          Register Now
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        {" "}
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow z-50 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-black p-6 shadow-lg focus:outline-none">
          <Dialog.Title className="text-[#e81d69] m-0 text-3xl font-bold font-sharp text-center ">
            Choose Your Registration Option
          </Dialog.Title>

          <div className="mt-6 flex flex-col space-y-6">
            <div className="border border-[#e81d69] rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex flex-col items-center space-y-2">
                <University className="text-[#e81d69]" size={56} />
                <h3 className="text-lg font-semibold text-white text-center font-sharp">
                  Fr.CRCE student
                </h3>
              </div>
              <div
                ref={applyButtonRef}
                className="apply-button "
                data-hackathon-slug="bit-n-build-crce"
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
              ></div>{" "}
            </div>

            <div className="border border-[#e81d69] rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex flex-col items-center space-y-2">
                <svg
                  fill="#e81d69"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 241 260"
                  className="w-24 h-24"
                >
                  <polygon points="227.822,63.335 215.884,64.816 195.815,80.809 197.159,87.984 179.343,90.9 171.988,87.529 170.643,79.845 163.422,80.02 165.128,93.27 146.79,93.703 121.821,86.002 100.271,74.179 106.398,62.15 90.884,51.603 89.61,41.434 93.782,43.975 98.261,41.155 93.118,31.532 102.741,22.739 104.772,15.626 97.113,12.953 82.998,15.439 68.397,2 52.291,3.126 47.145,9.69 58.727,18.336 55.858,21.297 52.997,21.914 52.814,35.434 63.024,41.67 34.41,80.535 22.268,79.373 14.591,89.807 26.46,109.512 17.324,113.75 7.186,112.018 2.289,116.552 10.581,125.209 9.784,132.863 23.954,145.028 24.25,144.8 37.85,140.7 39.582,147.898 39.855,169.221 58.216,223.805 62.682,232.394 68.741,252.441 73.594,258 82.205,257.339 83.845,251.986 98.311,235.424 98.311,233.897 98.015,226.243 98.357,225.15 102.366,211.822 101.957,211.572 102.116,211.185 102.366,211.822 102.207,211.048 100.157,197.766 101.957,191.866 134.397,168.287 140.16,160.633 143.737,154.984 153.578,152.455 162.076,137.579 167.497,134.252 175.448,136.394 168.5,105.412 168.181,93.908 177.999,95.798 179.594,102.428 184.265,104.774 200.826,105.002 199.186,109.284 200.621,116.712 204.198,130.198 210.167,121.153 208.959,113.112 214.745,113.727 218.96,99.625 222.879,88.44 234.451,81.128 238.711,74.794" />
                </svg>{" "}
                <h3 className="text-lg font-semibold text-center text-white font-sharp">
                  From another college
                </h3>
              </div>

              <a
                href="https://unstop.com/o/ZGc2Wi6?lb=aUcskOfj&utm_medium=Share&utm_source=shortUrl"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full text-white bg-thered font-bold md:text-lg text-base py-3 px-6 hover:scale-105 hover:bg-opacity-90 ease-in-out duration-300 font-squid rounded-full mt-4 flex items-center justify-center">
                  <span className="mr-2">Register </span>
                  <Image
                    src="/unstop.png"
                    alt="Unstop Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </button>
              </a>
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className="text-[#e81d69] hover:bg-[#e81d69] hover:text-white focus:shadow-[#e81d69] absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RegistrationPopup;
