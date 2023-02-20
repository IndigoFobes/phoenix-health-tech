import React from "react";

export default function Contact() {
  return (
    <div className="h-screen flex items-center">
      <container className="bg-sky-400 grid grid-cols-5 mx-auto max-w-screen-md p-3 rounded-md">
        <div className="col-start-1 col-end-3 pl-5 pr-30">
          <h1 className="text-3xl font-semibold text-white mb-3">Contact us</h1>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>Other other details</p>
        </div>
        <div className="bg-white col-start-3 col-end-6 rounded-r-md p-5">
          <h2>Contact deets</h2>
        </div>
      </container>
    </div>
  );
}
