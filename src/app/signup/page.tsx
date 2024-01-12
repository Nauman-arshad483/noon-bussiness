import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="flex gap-2 w-full signup-comp">
      <div className="flex-1 flex-col justify-center items-center p-8 signup-left-col">
        <div className="flex flex-col gap-4 w-96 p-8 pt-10 mx-auto signup-sub-box">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo1.png" width={40} height={40} alt="logo1" />
              <h2 className="text-xl font-semibold text-gray-700">
                NoonSeller
              </h2>
            </Link>
          </div>
          <div className="flex justify-center mb-10">
            <p>Start your free trial</p>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 mr-2"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
            <h2 className="text-3xl font-bold ">Sign Up</h2>
          </div>

          <div className="flex">
            <form className="w-full max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 register-bt"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col signup-right-col justify-center items-center p-4">
        <div className="mb-4">
          <img
            src="/signup-image.png"
            alt="Image Description"
            className="signup-image object-cover"
          />
        </div>
        <div className="mb-2">
          <h1 className="text-xl font-bold">Pro Tip 2</h1>
        </div>
        <div>
          <p className="text-gray-700 w-64 flex justify-center items-center text-center">
            {`You can click on columns to arrange the list in Seller Metrix. For
            example, click on the "Refunds" column to find your products with
            the most Refunds.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
