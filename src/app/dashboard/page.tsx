"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  function back() {
    router.push("/");
  }
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center w-full h-full">
      <div className="text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">Page in Progress</h1>
        <p className="text-lg mb-8">
          We are working on something amazing for you. Pleasee check back later.
        </p>
        <div className=" flex flex-col justify-center gap-8">
          <div className="animate-spin rounded-full  border-t-2 border-white border-opacity-25"></div>
          <p className="mt-4">Loading...</p>
          <Button onClick={back}> Back</Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
