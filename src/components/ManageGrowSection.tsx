import React from "react";
import { Button } from "@/components/ui/button";

const ManageGrowSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex space-x-8">
        <div className="w-1/2 p-4">
          <p className="text-xl mb-2 mt-10">
            Sales Reviews&quot; Email Automation Optimize&quot; Generate&quot; Automate with
            NoonMetrix.
          </p>
          <h2 className="text-6xl font-bold mr-[30px] mt-5">
            Optimize &quot;Expand your Amazon Presence - for Sellers &quot Agencies
          </h2>
          <div className="flex space-x-4 mt-10">
            <Button className="start_free_trial_bt" variant="default">
              Start Free Trial
            </Button>
            <Button className="watch_video_bt" variant="secondary">
              Watch Video
            </Button>
          </div>
        </div>
        <div className="w-1/2 pl-4"></div>
      </div>
    </section>
  );
};

export default ManageGrowSection;
