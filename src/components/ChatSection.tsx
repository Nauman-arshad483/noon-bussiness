import React from "react";
import { Button } from "./ui/button";

const ChatSection = () => {
  return (
    <section className="w-full section-padder">
      <div className="mx-auto flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-semibold text-gray-800">We are here for you</h1>
        <p className="text-gray-600 text-center max-w-md">
          If you have any questions, big or small, you can always reach out to
          us. Just click the button below to chat with a real person from
          Seller Metrix. We try to always be available and respond in minutes.
        </p>
        <Button className="start_Chat_bt">Start Chat</Button>
      </div>
    </section>
  );
};

export default ChatSection;
