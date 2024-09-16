import React from "react";
import { Phone, Mail } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div
      id="contact"
      className="min-h-screen text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-squid mb-8 sm:mb-12 text-center text-white">
        Contact Us
      </h1>
      <div className="w-full max-w-4xl space-y-8 sm:space-y-16">
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start">
          <ContactItem
            icon={<Phone className="h-8 w-8 sm:h-10 sm:w-10 text-gray-300" />}
            name="Shaun Mendez"
            detail="9920778067"
          />
          <ContactItem
            icon={<Phone className="h-8 w-8 sm:h-10 sm:w-10 text-gray-300" />}
            name="Angela Dsouza"
            detail="8291008299"
          />
        </div>
        <div className="flex flex-col items-center">
          <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-gray-300 mb-2" />
          <p className="font-squid text-3xl sm:text-4xl text-gray-50 text-center">
            Email
          </p>
          <a
            href="mailto:crcegdsc@gmail.com"
            className="font-sharp text-xl sm:text-2xl text-blue-400 hover:text-blue-300 transition-colors duration-300 text-center"
          >
            crcegdsc@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  name: string;
  detail: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, name, detail }) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="mb-2">{icon}</div>
    <p className="font-squid text-2xl sm:text-3xl text-gray-50 text-center md:text-left">
      {name}
    </p>
    <p className="font-sharp text-lg sm:text-xl text-gray-100 text-center md:text-left">
      {detail}
    </p>
  </div>
);

export default ContactUs;
