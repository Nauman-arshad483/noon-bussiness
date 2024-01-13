import React from "react";
import { Button } from "./ui/button";

const PricingSection = () => {
  return (
    <section className="w-full  section-padder py-16">
      <div className="mx-auto flex flex-col space-y-8 items-center">
        <h1 className="text-4xl font-bold text-gray-800">Pricing Plans</h1>
        <p className="text-lg text-gray-600 text-center max-w-lg">
          Transparent and affordable pricing. Try 30 days for free by signing up
          today. No credit card required. No hidden fees.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Starter
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              0 to 100 orders per month
            </p>
            <img
              src="card1.png"
              height={230}
              width={150}
              className="object-contain"
              alt="card 1 "
            />
            <span className="text-2xl font-bold pt-4">$0</span>
            <p className="text-gray-600 mb-4 text-center">forever free</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md  flex-col flex justify-center items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Growth
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              101 to 2500 orders per month
            </p>
            <img
              src="card2.png"
              height={230}
              width={150}
              className="object-contain "
              alt="card 2"
            />
            <span className="text-2xl font-bold pt-4">$15</span>
            <p className="text-gray-600 mb-4 text-center">paid monthly</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex-col flex justify-center items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Pro
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              2501 to 5000 orders per month
            </p>
            <img
              src="card3.png"
              height={230}
              width={150}
              className="object-contain "
              alt="card 3 "
            />
            <span className="text-2xl font-bold pt-4">$35</span>
            <p className="text-gray-600 mb-4 text-center">paid monthly</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex-col flex justify-center items-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Enterprise
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              5001 to 10000 orders per month
            </p>
            <img
              src="card4.png"
              height={230}
              width={150}
              className="object-contain "
              alt="card 4"
            />
            <span className="text-2xl font-bold pt-4">$85</span>
            <p className="text-black-100 text-center text-xs">
              +$7 per block of 1000 orders
            </p>
            <p className="text-gray-600 mb-4 text-center">paid monthly</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button  className="start_free_trial_bt_1">Start Free Trial Now</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
