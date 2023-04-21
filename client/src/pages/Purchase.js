import React, { useState, useRef } from "react";
import StripeContainer from "../components/StripeContainer";
import greenImage from "../assets/green_placeholder.jpg";
import familyPlaying from "../assets/family-playing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import purchase from "../assets/pht_purchase_graphic_1.png";
import phoneCall from "../assets/pht_purchase_graphic_2.png";
import install from "../assets/pht_purchase_graphic_3.png";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
} from "framer-motion";

const imgVariant1 = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const imgVariant2 = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const imgVariant3 = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      delay: 0.6,
    },
  },
};

const textVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "linear",
      delay: 0.8,
    },
  },
};

const expectVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
      delay: 0.1,
    },
  },
};

export default function Purchase({ currentPage, handlePageChange }) {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="bg-fixed purchase-bg relative">
      <div className="bg-gray-200/80 py-10">
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 md:col-end-5 mb-5 mx-10">
            <h1 className="text-center md:text-left our-mission title-text">
              Purchase a Unit
            </h1>
          </container>
        </div>
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 md:col-end-5 xl:col-end-4 mb-5 mx-10 text-center dm-sans-med md:text-left text-sm sm:text-lg md:text-xl">
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
      <motion.div
        className="flex flex-col w-full my-60 place-items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          variants={expectVariant}
          className="text-center hover:translate-y-4 transition duration-700 ease-in-out"
          animate={{ transform: "translateY(-28px)" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <p className="text-white dm-sans-bold expect-text border-b-4 border-white">
            What to Expect
          </p>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-white expect-text mt-2"
          />
        </motion.div>
      </motion.div>
      {/* regular to large screens */}
      <div className="hidden md:flex items-center flex-col">
        <motion.div
          className="bg-gray-200/80 grid grid-cols-6 justify-items-center w-full mx-20 mt-5 pt-8 pb-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            variants={imgVariant1}
            className="col-start-1 col-end-3 flex flex-col text-center gap-4"
          >
            <p className="dm-sans-med text-[#0E4370] text-2xl">Purchase</p>
            <img
              className="w-1/3 lg:w-2/5 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={purchase}
              alt="Laptop"
            ></img>
          </motion.div>
          <motion.div
            variants={imgVariant2}
            className="col-start-3 col-end-5 flex flex-col text-center gap-4"
          >
            <p className="dm-sans-med text-[#0E4370] text-2xl">Call</p>
            <img
              className="w-1/3 lg:w-2/5 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={phoneCall}
              alt="Woman on phone call smiling."
            ></img>
          </motion.div>
          <motion.div
            variants={imgVariant3}
            className="col-start-5 col-end-7 flex flex-col text-center gap-4"
          >
            <p className="dm-sans-med text-[#0E4370] text-2xl">Install</p>
            <img
              className="w-1/3 lg:w-2/5 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={install}
              alt="Man in overalls giving thumbs-up."
            ></img>
          </motion.div>
        </motion.div>
        <motion.ul
          className="grid grid-cols-6 justify-items-center w-full mx-20 bg-[#0E4370] text-white py-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.li
            variants={textVariant}
            className="col-start-1 col-end-3 flex flex-col text-center gap-4"
          >
            <p className="mx-8 md:mx-10 lg:mx-20 dm-sans-med">
              Purchase a unit online. You will fill out a form with your contact
              information so we can get in touch.
            </p>
          </motion.li>
          <motion.li
            variants={textVariant}
            className="col-start-3 col-end-5 flex flex-col text-center gap-4"
          >
            <p className="mx-8 md:mx-10 lg:mx-20 dm-sans-med">
              One of our dealers near you will receive your order and give you a
              call or email so you can plan a day that works best for you to get
              your new unit installed.
            </p>
          </motion.li>
          <motion.li
            variants={textVariant}
            className="col-start-5 col-end-7 flex flex-col text-center gap-4"
          >
            <p className="mx-8 md:mx-10 lg:mx-20 dm-sans-med">
              Installation day will come and go, and you can breathe deeply
              knowing your HVAC unit is doing its thing, keeping your air clean!
            </p>
          </motion.li>
        </motion.ul>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center flex-col bg-[#0E4370]/60 py-10">
        <motion.div
          className=" justify-items-center mb-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            variants={imgVariant1}
            className="flex flex-col text-center pt-2"
          >
            <p className="dm-sans-bold text-white text-2xl my-3">Purchase</p>
            <img
              className="w-1/3 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={purchase}
              alt="Laptop"
            ></img>
          </motion.div>
          <motion.div
            variants={textVariant}
            className="flex flex-col text-center"
          >
            <p className="py-6 px-8 sm:px-20 dm-sans-med text-white">
              Purchase a unit online. You will fill out a form with your contact
              information so we can get in touch.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className=" justify-items-center mb-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            variants={imgVariant1}
            className="flex flex-col text-center pt-2"
          >
            <p className="dm-sans-bold text-white text-2xl my-3">Call</p>
            <img
              className="w-1/3 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={phoneCall}
              alt="Woman on phone call smiling."
            ></img>
          </motion.div>
          <motion.div
            variants={textVariant}
            className="flex flex-col text-center"
          >
            <p className="py-6 px-8 sm:px-20 dm-sans-med text-white">
              One of our dealers near you will receive your order and give you a
              call or email so you can plan a day that works best for you to get
              your new unit installed.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className=" justify-items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            variants={imgVariant1}
            className="flex flex-col text-center pt-2"
          >
            <p className="dm-sans-bold text-white text-2xl my-3">Install</p>
            <img
              className="w-1/3 self-center hover:scale-110 transition duration-500 ease-in-out"
              src={install}
              alt="Man in overalls giving thumbs-up."
            ></img>
          </motion.div>
          <motion.div
            variants={textVariant}
            className="flex flex-col text-center"
          >
            <p className="py-6 px-8 sm:px-20 dm-sans-med text-white">
              Installation day will come and go, and you can breathe deeply
              knowing your HVAC unit is doing its thing, keeping your air clean!
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* Purchase box */}
      <div className="grid grid-cols-6 py-20 bg-white">
        <div className="col-start-1 col-end-7 md:col-end-4 flex flex-col justify-center place-items-center">
          <h2 className="dm-sans-bold text-[#0E4370] hvac mb-2">HVAC Unit</h2>
          <hr class="h-px my-4 w-2/3 bg-[#0E4370] border-0 dark:bg-gray-700" />
          <h3 className="dm-sans-med text-[#0E4370] text-xl mb-4">$3350.00</h3>
          <h4 className="text-[#0E4370] mb-8">
            Text about the product. Information.
          </h4>
          <Link to="/contact">
            <p
              className="text-yellow-500 dm-sans-med text-base lg:text-lg font-bold flex drop-shadow-md hover:translate-x-3 transition duration-300 cursor-pointer"
              onClick={() => handlePageChange("Contact")}
            >
              Contact Us to Purchase{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </p>
          </Link>
        </div>
        <div className="col-start-1 md:col-start-4 col-end-7 w-2/3 mx-auto flex flex-col items-center">
          <img
            src={greenImage}
            alt="HVAC Unit placeholder."
            className="mt-10 md:mt-0 mb-5"
          />
          {showItem ? (
            <div className="col-start-1 col-end-7 lg:col-start-2 lg:col-end-6 flex flex-col">
              <button
                onClick={() => setShowItem(false)}
                className="self-center bg-amber-400 border-2 border-amber-400 px-4 py-1 mt-5 rounded-sm hover:bg-transparent hover:border-2 hover:border-amber-400"
              >
                Back
              </button>
            </div>
          ) : (
            <>
              {/* Placeholder for hidden purchase button. */}
              <div>
                <p className="dm-sans text-ms">
                  {`To purchase a unit, please give us a call at (678) 886-3901.`}
                </p>
                <p className="dm-sans text-md">
                  {` Or visit our `}
                  <Link to="/contact">
                    <span
                      onClick={() => handlePageChange("Contact")}
                      className="dm-sans-bold hover:text-yellow-500 hover:cursor-pointer"
                    >{`Contact page.`}</span>
                  </Link>
                  {` Online purchase feature coming soon.`}
                </p>
              </div>
              <button
                className="hidden sm:text-xl md:text-2xl dm-sans-bold col-start-1 col-end-7 md:col-start-4 md:col-end-7 text-center py-2 rounded-sm text-yellow-400 hover:translate-x-2 transition duration-300 cursor-pointer mt-5"
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
        {showItem ? (
          <div className="col-start-1 col-end-7 lg:col-start-2 lg:col-end-6 flex flex-col">
            <StripeContainer />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
