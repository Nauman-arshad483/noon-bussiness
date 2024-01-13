import React from "react";

const GlobalDashboardSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4 section5-col-img">
          <img
            src="section5-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Unified Dashboard - Consolidate All Data in One Centralized Hub
          </h1>
          <p className="text-xl text-gray-600">
            Sync Across Marketplaces - Monitor Global Sales and Profit in One
            Dashboard Link various marketplaces to view worldwide sales and
            profit consolidated in a global dashboard, all in your preferred
            currency. Enjoy the flexibility of adding unlimited Seller Central
            accounts at no extra expense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalDashboardSection;
