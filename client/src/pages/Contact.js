import React from "react";

export default function Contact() {
  return (
    <div className="h-screen flex items-center">
      <container className="bg-sky-400 grid grid-cols-5 mx-auto max-w-screen-lg p-4 rounded-md">
        <div className="col-start-1 col-end-3 pl-5 pr-20">
          <h1 className="text-3xl font-bold text-white mb-5">Contact us</h1>
          <p className="text-xl text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-xl text-white mb-3">777-777-7777</p>
          <p className="text-xl text-white mb-3">will@phoenixhealthtech.com</p>
          {/* social media icons: facebook, so far */}
        </div>
        <div className="bg-white col-start-3 col-end-6 rounded-r-md p-8 grid grid-rows-2">
          <div className="grid grid-cols-2 gap-3">
            <h2>first name</h2>
            <h2>last name</h2>
            <h2>phone</h2>
            <h2>email</h2>
          </div>
          <div className="text-center mt-3">
            <h2>Message</h2>
            <button className="mt-3">Submit</button>
          </div>
        </div>
      </container>
    </div>
  );
}
