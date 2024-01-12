import React from "react";

const TrackSalesSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4">
          <img
            src="tracksale-image.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            {`Monitor your Amazon sales and profit in real-time with NoonMetrix.`}
          </h1>
          <p className="text-xl text-gray-600">
            {`View Amazon Sales & Profit on Your Dashboard Explore your personal
            dashboard featuring real-time financial metrics—Sales, Profit, PPC
            Spend, Amazon Fees, ROI, Refunds, and key figures.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackSalesSection;
