import React from "react";

const PlaystoreSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4 flex justify-center">
          <img
            src="section11-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-1/2 pl-4 gap-4">
          <h1 className="text-4xl font-bold mb-4 mr-10">
            Optimized for Desktop, Tablet & Mobile Devices
          </h1>
          <p className="text-xl text-gray-600 mr-10">
            NoonMetrix is available across all devices, ensuring access to your
            Amazon sales data from anywhere. Download our Amazon Seller App for
            mobile phones, compatible with both Android and iOS platforms.
          </p>
          <div className="flex  align-center gap-4 mt-2">
            <img
              src="app-store.webp"
              alt="Image Description"
              className="w-25 h-12 object-cover"
            />
            <img
              src="google-play.webp"
              alt="Image Description"
              className="w-25 h-12 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaystoreSection;
