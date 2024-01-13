import React from "react";
import { Link } from "lucide-react";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-gray-100 text-black py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo1.png" width={40} height={40} alt="logo1" />
            <h2 className="text-xl font-semibold text-gray-700">
              NoonSeller
            </h2>
          </div>
          <div className="mb-4">
            <img
              src="app-store.webp"
              alt="App Store"
              className="w-25 h-12 object-cover"
            />
          </div>
          <div>
            <img
              src="google-play.webp"
              alt="Google Play"
              className="w-25 h-12 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:ml-12">
          <ul>
            <li className="text-gray-400">Start free trial</li>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:ml-12">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:ml-12">
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-4">
              Seller Metrix, 51 Goldhill Plaza, #07-10/11, 308900 Singapore
            </p>
            <div className="flex gap-4">
              <Linkedin className="text-2xl" />
              <Facebook className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
