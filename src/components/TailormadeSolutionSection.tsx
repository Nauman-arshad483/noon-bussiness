import React from "react";

const TailormadeSolutionSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Customized Solution for Agencies
          </h1>
          <p className="text-xl text-gray-600">
            Unlock all the essential features and tools to efficiently manage
            and expand your client base. Dive into the Agency Dashboard, where
            each client is neatly separated, allowing you to analyze individual
            performance effortlessly.
          </p>
        </div>
        <div className="w-1/2 p-4 flex justify-center">
          <img
            src="section10-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TailormadeSolutionSection;
