import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="flex flex-col gap-40">
        <div className="flex flex-row justify-center items-center gap-52">
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon1.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 1"
              />
            </div>
            
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              All Your Amazon Expenses
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon2.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 2"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              Return on Investment Calculation
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon3.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 3"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              VAT Calculation
            </p>
          </div>
          <div className=" bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon4.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 4"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              Unlimited Seller Central Accounts
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon5.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 5"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              Secure Data Handling
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-52">
          <div className="bg-white flex flex-col justify-center items-center ">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon6.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 6"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              GDPR Compliant
            </p>
          </div>

          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon7.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 7"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              Analyze any Combination of Products
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon8.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 8"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              Detailed Costs Breakdown
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon9.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 9"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              Gross & Net Profit Calculation
            </p>
          </div>
          <div className="bg-white flex flex-col justify-center items-center">
            <div className="p-4 shadow-md rounded-lg">
              <img
                src="icon10.svg"
                height={42}
                width={42}
                className="object-contain"
                alt="Icon 10"
              />
            </div>
            <p className="mt-2 text-gray-700 text-sm font-semibold w-24 text-center">
              IGST For Amazon India Sellers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
