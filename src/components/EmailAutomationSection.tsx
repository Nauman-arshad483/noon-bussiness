import React from "react";

const EmailAutoamtionSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4 section3-col-img flex justify-center">
          <img
            src="section3-col-img.webp"
            alt="Image Description"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center align-center w-1/2 pl-4">
          <h1 className="text-4xl font-bold mb-4">
            Automate Emails - Boost Amazon Product Reviews
          </h1>
          <p className="text-xl text-gray-600">
            Automate Customer Follow-ups with Email Effortlessly engage with
            customers through automated emails or utilize the "Request Review"
            feature, leveraging Amazon's internal communication system. This
            fully automated, ToS-compliant process allows you to send unlimited
            emails with any NoonMetrix plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailAutoamtionSection;
