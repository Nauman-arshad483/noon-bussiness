import React from "react";

const AmazonSellerAppSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            NoonMetrix Mobile App - Analytics Anywhere, Anytime.
          </h1>
          <p className="text-xl text-gray-600">
            NoonMetrix includes a complimentary mobile app, ensuring you can
            monitor your Amazon sales on the go! Your sales data refreshes every
            3 minutes, guaranteeing you stay updated and never miss a sale. The
            app is compatible with both Android and iOS platforms.
          </p>
        </div>

        <div className="w-1/2 p-4">
          <img
            src="section4-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AmazonSellerAppSection;
