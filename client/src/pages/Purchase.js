import React, { useState } from "react";
import StripeContainer from "../components/StripeContainer";
import greenImage from "../assets/green_placeholder.jpg";

export default function Purchase({ currentPage, handlePageChange }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-5 mb-5 mt-10">
          <h1 className="text-2xl title-text">Purchase a Unit</h1>
        </container>
      </div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
            Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
            ultrices. Integer blandit dui ut laoreet bibendum. Maecenas
            tristique, diam a mollis euismod, nunc erat ultricies orci, vel
            auctor ex nulla in erat. Ut imperdiet, purus a porttitor dignissim,
            nisi neque ultrices eros, a commodo lectus lectus egestas leo. Ut
            quis neque elit. In congue elit rhoncus justo viverra congue. Fusce
            ultricies nisi a lacus gravida, in efficitur est finibus. Aliquam
            varius massa vel mi ornare malesuada.
          </p>
        </container>
      </div>
      <div className="grid grid-cols-6 mt-20 mb-20">
        <div className="col-start-2 col-end-6 text-center items-center">
          <h2 className="title-text text-2xl mb-2">HVAC Unit</h2>
          {showItem ? (
            <div>
              <button
                onClick={() => setShowItem(false)}
                className="bg-amber-400 border-2 border-amber-400 px-4 py-1 rounded-sm hover:bg-white hover:border-2 hover:border-amber-400"
              >
                Back
              </button>
              <StripeContainer />
            </div>
          ) : (
            <>
              {" "}
              <h3 className="font-medium text-xl mb-4">$xxxx</h3>{" "}
              <img
                src={greenImage}
                alt="HVAC Unit placeholder."
                className="w-1/2 mx-auto mb-5"
              />
              <button
                className="bg-amber-400 rounded-md px-4 py-2 mt-3 border-2 border-amber-400 hover:bg-white hover:border-2 hover:border-amber-400 hover:cursor-pointer"
                onClick={() => setShowItem(true)}
              >
                Purchase a Unit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
