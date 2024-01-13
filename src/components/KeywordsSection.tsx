import React from "react";

const KeywordSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Discover the keywords fueling your NATURAL Amazon traffic and sales.
          </h1>
          <p className="text-xl text-gray-600">
            Explore Your Dashboard: Amazon Sales, Profit, and Real-Time Metrics
            Effortlessly view your Amazon sales and profit through a personal
            dashboard showcasing real-time financial metrics such as Sales,
            Profit, PPC Spend, Amazon Fees, ROI, Refunds, and other key figures.
          </p>
        </div>

        <div className="w-1/2 p-4 flex justify-center">
          <img
            src="section2-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KeywordSection;
