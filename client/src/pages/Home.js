import React, { useState } from "react";
// import Modal from "../components/Modal";
// import Modal from "../components/Modal";
import blue from "../assets/blue_triangle_pht.png";
import green from "../assets/green_triangle_pht.png";
import yellow from "../assets/orange_triangle_pht.png";
// import Wings from "../assets/PHT_WINGS.png";
import CleanHome from "../assets/clean_home_pht_edit.jpg";
import extraLine from "../assets/clean_home_extra_line.png";
import greenPhoto from "../assets/pexels-photomix.jpg";
import natural from "../assets/pexels-skylar-kang-6370159.jpg";
import blueGirl from "../assets/pexels-george-dolgikh.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import familyOutside from "../assets/family-outside.jpg";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import bullet from "../assets/bullet_pht.png";
// import Modal from "../components/Modal";

// for animations
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

export default function Home({ currentPage, handlePageChange }) {
  const [isHoveringYellow, setisHoveringYellow] = useState(false);

  const [isHoveringGreen, setisHoveringGreen] = useState(false);

  const [isHoveringBlue, setisHoveringBlue] = useState(false);

  // handle mouse enter yellow box
  function handleMouseEnterYellow(e) {
    setisHoveringYellow(true);
    setisHoveringBlue(false);
    setisHoveringGreen(false);
  }

  // handle mouse enter green box
  function handleMouseEnterGreen(e) {
    setisHoveringGreen(true);
    setisHoveringBlue(false);
    setisHoveringYellow(false);
  }

  // handle mouse enter blue box
  function handleMouseEnterBlue(e) {
    setisHoveringBlue(true);
    setisHoveringYellow(false);
    setisHoveringGreen(false);
  }

  // Mobile for CLICKS
  const [currentColor, setCurrentColor] = useState("yellow");

  function handleClickYellow(e) {
    setCurrentColor("yellow");
  }

  function handleClickGreen(e) {
    setCurrentColor("green");
  }

  function handleClickBlue(e) {
    setCurrentColor("blue");
  }

  // Handle click for top Image on mobile devices

  const [isClicked, setIsClicked] = useState(false);

  function handleImageClick(e) {
    setIsClicked(true);
  }

  function componentDidMount() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="flex flex-col relative">
        <div
          onClick={handleImageClick}
          className={`cursor-pointer relative w-full transition ease-in-out duration-1200 hover:blur-none ${
            isClicked ? "blur-none" : "blur-sm"
          }`}
        >
          <img
            className="w-full"
            src={CleanHome}
            alt="White, modern couch with white pillows. Small circular tables with vase of pretty leaf decoration."
          ></img>
          <div className="w-1/2 absolute top-2/5 left-1/5 -translate-x-1/3 flex flex-col sm:grid grid-rows-3 md:pr-20 gap-1 md:gap-2">
            <p className="self-center text-center dm-sans-bold text-xs sm:text-sm md:text-base lg:text-2xl sm:font-bold warm-gray p-2 mt-4 sm:mt-0 sm:p-4 rounded-sm text-white">
              Not quite as clean as you think.
            </p>
            <p className="row-start-2 row-end-4 self-center hidden sm:flex text-xs dm-sans md:text-sm lg:text-base xl:text-lg">
              Mold and fungus grow on your air conditioning’s coil. As air blows
              through your system, it picks up spores and mycotoxins and spreads
              them through your home or building often potentially causing an
              allergic reaction or sickness.
            </p>
          </div>
        </div>
        <h1 className="w-1/2 absolute top-1/6 left-1/5 -translate-x-1/3 font-bold text-base sm:text-2xl  lg:text-4xl md:pr-10 md:ml-0 title-text">
          How clean is the air in your <br></br>home or building?
        </h1>
      </div>
      <p className="row-start-2 row-end-4 self-center text-center flex sm:hidden text-xs dm-sans md:text-sm lg:text-base warm-gray text-white px-8 py-2">
        Mold and fungus grow on your air conditioning’s coil. As air blows
        through your system, it picks up spores and mycotoxins and spreads them
        through your home or building, often causing an allergic reaction or
        sickness.
      </p>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-6 mb-5 mt-5 md:mt-10">
          <h1 className="text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl title-text ">
            The Phoenix Health Technology Solution
          </h1>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </container>
        <container className="flex flex-col pb-10 lg:mb-0 col-start-1 col-end-7 mx-8 lg:col-start-2 lg:col-end-6 text-center md:text-left text-sm sm:text-base lg:text-lg items-center ">
          <p className="text-justify dm-sans">
            The Phoenix Module prevents mold and fungus from growing in your air
            conditioning system.
            <br></br>
            <br></br>
            <span className="dm-sans-bold">What is the Phoenix Module?</span>
            <br></br>
            <br></br>
            The Phoenix Module is a patented system made in the U.S.A. that
            prevents mold and fungus from growing in your air conditioning
            system. It includes:
            <br></br>
            <br></br>
            <ul className="list-disc ml-10">
              <li>The Phoenix System of Sprayers</li>
              <li>The Phoenix Formula</li>
              <li>The Phoenix Sensors and Alarm</li>
              <li>The Phoenix App</li>
            </ul>
          </p>
          <Link
            to="/learn"
            className="lg:text-lg dm-sans-med col-start-3 col-end-5 text-center py-2 rounded-sm title-text font-bold hover:translate-x-2 transition duration-300 cursor-pointer mt-5"
            onClick={() => handlePageChange("Learn")}
          >
            <p>
              Learn More About the Phoenix Module{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </p>
          </Link>
        </container>
      </div>
      {/* Strip for contact + purchase */}
      <div className="bg-gradient-to-r from-[#0E4370] to-sky-500 w-full sm:h-60 lg:h-80 grid grid-cols-7">
        {/* Purchase */}
        <div className="flex flex-col col-start-2 col-end-7 sm:col-start-1 2xl:col-start-2 sm:col-end-4 lg:col-end-5 sm:ml-5 justify-center place-self-center xl:justify-self-start items-center sm:items-start mt-8 sm:mt-0 xl:ml-40 2xl:ml-0">
          <h2 className="dm-sans-med text-base md:text-xl lg:text-3xl font-bold text-white mb-3">
            Interested in Purchasing{" "}
            <br className="hidden sm:flex xl:hidden"></br> a New Unit?
          </h2>
          <p className="dm-sans text-base lg:text-lg font-medium text-white mb-1 lg:mb-2 text-center sm:text-left">
            Give us a call, send us an email, <br></br>or head over to our
            purchase page.
          </p>
          <Link to="/purchase" className="">
            <p
              className="text-yellow-500 dm-sans-med text-base md:text-lg lg:text-xl xl:text-2xl font-bold flex drop-shadow-md hover:translate-x-3 transition duration-300 cursor-pointer"
              onClick={() => handlePageChange("Purchase")}
            >
              Visit Purchase Page{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </p>
          </Link>
        </div>
        {/* Contact */}
        <Link
          to="/contact"
          className="col-start-2 col-end-7 sm:col-start-5 my-8 sm:my-0 justify-center place-self-center"
        >
          <div
            onClick={() => handlePageChange("Contact")}
            className="flex flex-col items-start bg-gradient-to-br from-yellow-600 to-yellow-400 p-4 md:p-8 shadow-md shadow-black hover:scale-110 hover:from-yellow-400 hover:to-yellow-500 transition ease-in-out duration-500 cursor-pointer"
          >
            <h2 className="dm-sans-bold text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
              Contact us
            </h2>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon
                className="text-white mt-1.5"
                icon={icon({
                  name: "phone",
                  style: "solid",
                })}
              />
              <p className="dm-sans text-lg md:text-xl text-white mb-2 md:mb-3">
                {`(678) 886-3901`}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <FontAwesomeIcon
                className="text-white mt-1.5"
                icon={icon({
                  name: "envelope",
                  style: "solid",
                })}
              />
              <p className="dm-sans text-lg md:text-xl text-white mb-2 md:mb-3">
                will@phoenixhealthtech.com
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* icons */}
      {/* Click instead of hover */}
      <container className="grid grid-cols-6">
        <container className="col-start-2 col-end-6 mb-5 mt-5 md:mt-10">
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl title-text">
            What We Are All About
          </h1>
          <hr class="h-px my-4 mx-20 col-start-3 col-end-5 bg-gray-200 border-0 dark:bg-gray-700" />
        </container>
      </container>
      <motion.container
        className="flex lg:grid lg:grid-cols-5 lg:py-5"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* yellow */}

        <div
          className={`col-start-2 col-end-3 cursor-pointer flex flex-col justify-center items-center lg:pt-6 pb-3 transition ease-out duration-300 ${
            currentColor === "yellow"
              ? "scale-110 transition ease-in-out duration-800"
              : ""
          }`}
          onClick={handleClickYellow}
        >
          <motion.div
            variants={imgVariant1}
            className="flex flex-col items-center"
          >
            <img
              src={yellow}
              className={`w-1/4 transition ease-in-out duration-500 hover:opacity-100 ${
                currentColor === "yellow"
                  ? "opacity-100 transition ease-in-out duration-600"
                  : "opacity-50"
              }`}
              alt="Yellowish-orange recycle symbol."
            ></img>
            <h3 className={`dm-sans-bold text-xs sm:text-base md:text-xl`}>
              All Natural
            </h3>
          </motion.div>
        </div>
        {/* green */}
        <div
          className={`col-start-3 cursor-pointer flex flex-col justify-center items-center lg:pt-6 pb-3 transition ease-out duration-300 ${
            currentColor === "green"
              ? "scale-110 transition ease-in-out duration-800"
              : ""
          }`}
          onClick={handleClickGreen}
        >
          <motion.div
            variants={imgVariant2}
            className="flex flex-col items-center"
          >
            <img
              src={green}
              className={`w-1/4 transition ease-in-out duration-500 hover:opacity-100 ${
                currentColor === "green"
                  ? "opacity-100 transition ease-in-out duration-600"
                  : "opacity-50"
              }`}
              alt="Green recycle symbol."
            ></img>
            <h3 className="dm-sans-bold text-xs sm:text-base md:text-xl">
              Green Solution
            </h3>
          </motion.div>
        </div>
        {/* blue */}

        <div
          className={`col-start-4 cursor-pointer flex flex-col justify-center items-center lg:pt-6 pb-3 transition ease-out duration-300 ${
            currentColor === "blue"
              ? "scale-110 transition ease-in-out duration-800"
              : ""
          }`}
          onClick={handleClickBlue}
        >
          <motion.div
            variants={imgVariant3}
            className="flex flex-col items-center"
          >
            <img
              src={blue}
              className={`w-1/4 transition ease-in-out duration-500 hover:opacity-100 ${
                currentColor === "blue"
                  ? "opacity-100 transition ease-in-out duration-600"
                  : "opacity-50"
              }`}
              alt="Blue recycle symbol."
            ></img>
            <h3 className="dm-sans-bold font-semibold text-xs sm:text-base md:text-xl">
              Prevention First
            </h3>
          </motion.div>
        </div>
      </motion.container>
      <div className="flex mb-10">
        {/* Yellow box */}
        <div
          className={`justify-center pt-10 lg:pt-5 px-8 flex-col text-center pb-20 ${
            currentColor === "yellow" ? "flex" : "hidden"
          }`}
        >
          <h2 className="title-text text-lg md:text-xl lg:text-2xl lg:place-self-start lg:ml-10">
            {`An All Natural & Organic Solution`}
          </h2>
          <div className="grid grid-cols-6">
            <hr class="h-px mt-2 mb-4 col-start-3 col-end-5 lg:mr-20 lg:col-start-1 lg:col-end-4 bg-gray-300 border-0 dark:bg-gray-700 lg:ml-10" />
            <div className="col-start-1 col-end-7 lg:col-end-4 flex flex-col px-10 lg:px-0">
              <p className=" text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg mb-3 lg:ml-10">
                {`Our cleaning solution is a proprietary, organic, nontoxic fungicide and bactericide. It contains no genetically modified organisms (non-GMO) or harsh chemicals.`}
              </p>
              <Link
                to="/about"
                className="lg:text-lg dm-sans-med col-start-1 col-end-7 lg:col-end-4 text-center place-self-center py-2 rounded-sm title-text font-bold hover:translate-x-2 transition duration-300 cursor-pointer mb-10"
                onClick={() => handlePageChange("About")}
              >
                <p>
                  Learn More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </span>
                </p>
              </Link>
            </div>
            <img
              src={familyOutside}
              className="col-start-1 col-end-7 lg:col-start-4 lg:col-end-7 lg:w-3/4 place-self-center"
              alt="Family of three playing outside, laughing. Dad helping toddler kick a socker ball."
            ></img>
          </div>
        </div>
        {/* Green box */}
        <div
          className={`justify-center pt-10 lg:pt-5 px-8 flex-col text-center pb-20 ${
            currentColor === "green" ? "flex" : "hidden"
          }`}
        >
          <h2 className="title-text text-lg md:text-xl lg:text-2xl lg:place-self-start lg:ml-10">
            A Green Solution
          </h2>
          <div className="grid grid-cols-6">
            <hr class="h-px mt-2 mb-4 col-start-3 col-end-5 lg:mr-20 lg:col-start-1 lg:col-end-4 bg-gray-300 border-0 dark:bg-gray-700 lg:ml-10" />
            <div className="col-start-1 col-end-7 lg:col-end-4 flex flex-col px-10 lg:px-0">
              <div className=" mb-3 lg:ml-10 font-medium text-sm sm:text-base md:text-lg">
                <p className="text-justify lg:text-left ">
                  {`Besides being an organic and nontoxic solution, there are other benefits to using our solution.`}
                </p>
                <br></br>
                <p className="text-justify lg:text-left">{`1. A clean HVAC uses less energy.`}</p>
                <br></br>
                <p className="text-justify lg:text-left px-5">
                  {`Before our system is installed, your HVAC coils are cleaned, removing any built-up mold, 
              bacteria or detritus adhering to the internal components of the system. By removing the build-up, air flows more freely 
              through the vents, requiring less work and power consumption by the HVAC unit to achieve the desired climate.`}
                </p>
                <br></br>
                <p className="text-justify lg:text-left">{`2. Longer 
              lasting equipment.`}</p>
                <br></br>
                <p className="text-justify lg:text-left px-5">
                  {`Airborne contaminants also cling to the HVAC system internal components that can cause rust and corrosion. 
              Our solution prevents buildout of other micro contaminants as well resulting in less frequent replacement of components, 
              including the condensation pump and line.`}
                </p>
              </div>
              <Link
                to="/about"
                className="lg:text-lg dm-sans-med col-start-1 col-end-7 lg:col-end-4 text-center place-self-center py-2 rounded-sm title-text font-bold hover:translate-x-2 transition duration-300 cursor-pointer mb-10"
                onClick={() => handlePageChange("About")}
              >
                <p>
                  Learn More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </span>
                </p>
              </Link>
            </div>
            <img
              src={greenPhoto}
              className="col-start-1 col-end-7 lg:col-start-4 lg:col-end-7 lg:w-3/4 place-self-center"
              alt="Close up of small, green plant sprouting from the ground. Blurry background of soil."
            ></img>
          </div>
        </div>
        {/* Blue box */}
        <div
          className={`justify-center pt-10 lg:pt-5 px-8 flex-col text-center pb-20 ${
            currentColor === "blue" ? "flex" : "hidden"
          }`}
        >
          <h2 className="title-text text-lg md:text-xl lg:text-2xl lg:place-self-start lg:ml-10">
            Prevention First
          </h2>
          <div className="grid grid-cols-6">
            <hr class="h-px mt-2 mb-4 col-start-3 col-end-5 lg:mr-20 lg:col-start-1 lg:col-end-4 bg-gray-300 border-0 dark:bg-gray-700 lg:ml-10" />
            <div className="col-start-1 col-end-7 lg:col-end-4 flex flex-col px-10 lg:px-0">
              <div className=" mb-3 lg:ml-10">
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {` Mold (a fungus) and bacteria in a building’s heating, ventilation, and air conditioning (HVAC)
Systems can cause serious health problems for the occupants including:`}
                </p>
                <br></br>
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {`1. Sick Building Syndrome`}
                </p>
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {`2. Stachybotrys (black mold)`}
                </p>
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {`3. Aspergillus Legionaries’ Disease`}
                </p>
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {`4. MRSA`}
                </p>
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {`5. Staphylococcus`}
                </p>
                <br></br>
                <p className="text-justify lg:text-left font-medium text-sm sm:text-base md:text-lg">
                  {`When an infected HVAC system turns on, the air blown through the vents carries mold, bacteria  and fungus into your building. Our solution eliminates the mold and fungus that lives inside the system, preventing the problem before it ever starts.
Our solution has undergone extensive efficacy testing by Microchem Laboratories. Various microbes were tested for inhibition of mycelial extension and spore germination. The results of this test are conclusive that air quality is improved dramatically. Results of those tests are available upon request.
`}
                </p>
              </div>
              <Link
                to="/about"
                className="lg:text-lg dm-sans-med col-start-1 col-end-7 lg:col-end-4 text-center place-self-center py-2 rounded-sm title-text font-bold hover:translate-x-2 transition duration-300 cursor-pointer mb-10"
                onClick={() => handlePageChange("About")}
              >
                <p>
                  Learn More{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </span>
                </p>
              </Link>
            </div>
            <img
              src={blueGirl}
              className="col-start-1 col-end-7 lg:col-start-4 lg:col-end-7 lg:w-3/4 place-self-center"
              alt="Young girl outside, wearing a tan fedora, jean jacket, and a blue and white button-up top. She  has red hair, is holding a paper airplane, and is smiling off into the distance."
            ></img>
          </div>
        </div>
      </div>
      {/* White space */}
      <div className="w-full h-[50px] md:h-[90px] bg-white"></div>
      <Testimonials />
      {/* Hidden FAQ section */}
      {/* <FAQ /> */}
    </div>
  );
}
