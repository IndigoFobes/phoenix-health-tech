import React, { useState } from "react";
import StripeContainer from "../components/StripeContainer";
import greenImage from "../assets/green_placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Purchase({ currentPage, handlePageChange }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="bg-fixed purchase-bg relative">
      <div className="shadow-inner pb-8 bg-gray-100 opacity-80 w-full h-[300px] sm:h-[340px] md:h-[370px] lg:h-[290px]"></div>
      <div className="absolute top-0 left-0">
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 md:col-end-5 mb-5 mt-10 mx-10">
            <h1 className="text-center text-shadow md:text-left our-mission title-text">
              Purchase a Unit
            </h1>
          </container>
        </div>
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 md:col-end-4 mb-5 mx-10 text-center dm-sans-med md:text-left sm:text-lg md:text-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum laoreet a nisl sit amet facilisis. Vestibulum id tellus
              felis. Vestibulum efficitur dignissim pulvinar. Sed vulputate
              posuere ultrices. Integer blandit dui ut laoreet bibendum.
            </p>
          </container>
        </div>
      </div>
      {/* space */}
      <div className="w-full h-[300px]"></div>
      <div className="grid grid-cols-6 bg-white h-[400px] "></div>
      {/* Purchase box */}
      <div className="grid grid-cols-6 bg-gradient-to-r from-[#0E4370] to-sky-500 py-8">
        <div className="col-start-1 col-end-4 flex flex-col justify-center place-items-center">
          <h2 className="dm-sans-bold text-white hvac mb-2">HVAC Unit</h2>
          <hr class="h-px my-4 w-2/3 bg-gray-100 border-0 dark:bg-gray-700" />
          <h3 className="dm-sans-med text-white text-xl mb-4">$2,355.00</h3>
          <h4 className="text-white">Text about the product. Information.</h4>
        </div>
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
            <img
              src={greenImage}
              alt="HVAC Unit placeholder."
              className="col-start-4 col-end-7 w-2/3 mx-auto mb-5"
            />
            <button
              className="text-lg md:text-xl dm-sans-bold col-start-5 col-end-6 text-center py-2 rounded-sm text-yellow-400 hover:translate-x-2 transition duration-300 cursor-pointer mt-5"
              onClick={() => setShowItem(true)}
            >
              <p>
                Purchase a Unit{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </span>
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
