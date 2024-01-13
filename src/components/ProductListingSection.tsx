import React from "react";

const ProductListingSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4 section7-col-img flex justify-center">
          <img
            src="section7-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Listed Product Traffic & Conversion Metrics
          </h1>
          <p className="text-xl text-gray-600">
            Monitor visitor traffic and conversion rates on your Amazon product
            listings to gauge customer interest and assess purchase behavior.
            These critical metrics significantly influence your product ranking
            on Amazon, making them essential for sellers to track.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductListingSection;
