"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Features", path: "/your-path" },
    { title: "Pricing", path: "/your-path" },
    { title: "Login", path: "/your-path" },
    { title: "Sign up", path: "/signup" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-2 max-w-screen-3xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo1.png" width={40} height={40} alt="logo1" />
            <h2 className="text-xl font-semibold text-gray-700">NoonSeller</h2>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={`text-gray-600 hover:text-indigo-600 ${
                  item.title === "Sign up"
                    ? "bg-blue-500 text-white font-bold p-3 rounded-lg signup_bt"
                    : ""
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
