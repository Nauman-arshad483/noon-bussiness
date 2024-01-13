import React from "react";

const TrackProductIndividuallySection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Monitor Each Amazon Product Independently
          </h1>
          <p className="text-xl text-gray-600">
            With NoonMetrix, track sales per ASIN, allowing you to quickly
            identify your top-performing products and address any
            underperformers effectively.
          </p>
        </div>
        <div className="w-1/2 p-4 flex justify-center">
          <img
            src="section6col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackProductIndividuallySection;
