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
import purchase from "../assets/pht_purchase_graphic_1.png";
import phoneCall from "../assets/pht_purchase_graphic_2.png";
import install from "../assets/pht_purchase_graphic_3.png";

export default function Purchase({ currentPage, handlePageChange }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="bg-fixed bg-gradient-to-b from-[#0E4370] to-sky-300 relative">
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
      <div className=" flex items-center flex-col">
        <ul className="bg-white grid grid-cols-6 justify-items-center w-full mx-20 mt-5 py-8">
          <li className="col-start-1 col-end-3 flex flex-col text-center gap-4 ">
            <p className="dm-sans-med text-[#0E4370] text-2xl">Purchase</p>
            <img
              className="w-1/3 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={purchase}
            ></img>
          </li>
          <li className="col-start-3 col-end-5 flex flex-col text-center gap-4">
            <p className="dm-sans-med text-[#0E4370] text-2xl">Call</p>
            <img
              className="w-1/3 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={phoneCall}
            ></img>
          </li>
          <li className="col-start-5 col-end-7 flex flex-col text-center gap-4">
            <p className="dm-sans-med text-[#0E4370] text-2xl">Install</p>
            <img
              className="w-1/3 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={install}
            ></img>
          </li>
        </ul>
        <ul className="grid grid-cols-6 justify-items-center w-full mx-20 bg-[#0E4370] text-white py-4">
          <li className="col-start-1 col-end-3 flex flex-col text-center gap-4">
            <p className="mx-20 dm-sans">
              Purchase a unit online. You will fill out a form with your contact
              information so we can get in touch.
            </p>
          </li>
          <li className="col-start-3 col-end-5 flex flex-col text-center gap-4">
            <p className="mx-20 dm-sans">
              One of our dealers near you will receive your order and give you a
              call or email so you can plan a day that works best for you to get
              your new unit installed.
            </p>
          </li>
          <li className="col-start-5 col-end-7 flex flex-col text-center gap-4">
            <p className="mx-20 dm-sans">
              Installation day will come and go, and you can breathe deeply
              knowing your HVAC unit is doing its thing, keeping your air clean!
            </p>
          </li>
        </ul>
      </div>
      {/* Purchase box */}
      <div className="grid grid-cols-6 py-20">
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
