import React from "react";

const AmazonRefundsSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4 flex justify-center">
          <img
            src="section9-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Keep a close eye on your Amazon Refunds
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive analysis of each FBA refund, including details like
            the reason, customer comment, return status, and more. Identify
            non-returned orders and request reimbursement—Amazon may owe you
            money!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmazonRefundsSection;
