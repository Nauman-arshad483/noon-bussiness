import React from "react";

const ChaChattingSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Ding-ding! Receive alerts for fresh Amazon orders.
          </h1>
          <p className="text-xl text-gray-600">
            Opt-in for notifications through the iOS or Android app whenever new
            Amazon orders roll in. Customize this feature based on your order
            volume preferences.
          </p>
        </div>
        <div className="w-1/2 p-4 flex justify-center">
          <img
            src="section8-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ChaChattingSection;
