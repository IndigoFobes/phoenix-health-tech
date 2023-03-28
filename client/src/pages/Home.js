import React, { useState } from "react";
// import Modal from "../components/Modal";
// import Modal from "../components/Modal";
import blue from "../assets/blue_triangle_pht.png";
import green from "../assets/green_triangle_pht.png";
import yellow from "../assets/orange_triangle_pht.png";
// import Wings from "../assets/PHT_WINGS.png";
import CleanHome from "../assets/clean_home_pht_edit.png";
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
// import Modal from "../components/Modal";

// for animations
const imgVariant1 = {
  offscreen: {
    y: 500,
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
    y: 500,
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
    y: 500,
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
            className=""
            src={CleanHome}
            alt="White, modern couch with white pillows. Small circular tables with vase of pretty leaf decoration."
          ></img>
          <p className="text-center dm-sans-bold text-xs sm:text-sm md:text-base lg:text-2xl absolute top-1/2 left-1/5 -translate-x-1/2 -translate-y-1/2 ml-10 md:ml-0 sm:font-bold warm-gray px-4 py-4 rounded-sm text-white">
            Not quite as clean as you think.
          </p>
        </div>
        <h1 className="font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl absolute top-1/4 ml-10 left-1/5 -translate-x-1/2 -translate-y-1/2 title-text">
          How clean is your home's air?
        </h1>
      </div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-6 mb-5 mt-5 md:mt-10">
          <h1 className="text-center font-semibold sm:text-xl md:text-2xl lg:text-3xl title-text ">
            The Phoenix Health Technology Solution
          </h1>
          <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </container>
        <container className="flex flex-col pb-10 lg:mb-0 col-start-1 col-end-7 mx-8 md:col-start-2 md:col-end-6 text-center md:text-left text-sm sm:text-base items-center ">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
            Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
            ultrices. Integer blandit dui ut laoreet bibendum. Maecenas
            tristique, diam a mollis euismod, nunc erat ultricies orci, vel
            auctor ex nulla in erat. Ut imperdiet, purus a porttitor dignissim,
            nisi neque ultrices eros, a commodo lectus lectus egestas leo. Ut
            quis neque elit. In congue elit rhoncus justo viverra congue. Fusce
            ultricies nisi a lacus gravida, in efficitur est finibus. Aliquam
            varius massa vel mi ornare malesuada. Suspendisse non ante aliquet
            diam bibendum viverra vel id felis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            interdum, dui vitae dapibus gravida, magna justo blandit sapien, nec
            convallis justo ex posuere erat. Curabitur quis dui mauris.
            Vestibulum sollicitudin viverra suscipit?
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
            Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
            ultrices. Integer blandit dui ut laoreet bibendum. Maecenas
            tristique, diam a mollis euismod, nunc erat ultricies orci, vel
            auctor ex nulla in erat. Ut imperdiet, purus a porttitor dignissim,
            nisi neque ultrices eros, a commodo lectus lectus egestas leo. Ut
            quis neque elit. In congue elit rhoncus justo viverra congue. Fusce
            ultricies nisi a lacus gravida, in efficitur est finibus. Aliquam
            varius massa vel mi ornare malesuada. Suspendisse non ante aliquet
            diam bibendum viverra vel id felis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            interdum, dui vitae dapibus gravida, magna justo blandit sapien, nec
            convallis justo ex posuere erat. Curabitur quis dui mauris.
            Vestibulum sollicitudin viverra suscipit.
          </p>
          <Link
            to="/learn"
            className="lg:text-lg dm-sans-med col-start-3 col-end-5 text-center py-2 rounded-sm title-text font-bold hover:translate-x-2 transition duration-300 cursor-pointer mt-5"
            onClick={[
              () => handlePageChange("Learn"),
              () => componentDidMount(),
            ]}
          >
            <p>
              Learn More{" "}
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
        <div className="flex flex-col col-start-2 col-end-7 sm:col-start-1 ml-5 md:ml-0 md:col-start-2 sm:col-end-4 lg:col-end-5 justify-center place-self-center lg:justify-self-start mt-8 sm:mt-0">
          <h2 className="dm-sans-med text-base md:text-xl xl:text-3xl font-bold text-white mb-3">
            Interested in Purchasing a New Unit?
          </h2>
          <p className="dm-sans text-base xl:text-lg font-medium text-white mb-1 lg:mb-2">
            Give us a call, send us an email, <br></br>or head over to our
            purchase page.
          </p>
          <Link to="/purchase" onClick={() => componentDidMount()}>
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
          onClick={[
            () => handlePageChange("Contact"),
            () => componentDidMount(),
          ]}
        >
          <div className="flex flex-col items-start bg-gradient-to-br from-yellow-600 to-yellow-400 p-4 md:p-8 shadow-md shadow-black hover:scale-110 hover:from-yellow-400 hover:to-yellow-500 transition ease-in-out duration-500 cursor-pointer">
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
                777-777-7777
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
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl title-text ">
            What We Are All About
          </h1>
          <hr class="h-px my-4 mx-20 col-start-3 col-end-5 bg-gray-200 border-0 dark:bg-gray-700" />
        </container>
      </container>
      <motion.container
        className="grid grid-cols-5 py-5"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* yellow */}
        <motion.div
          className={`col-start-2 cursor-pointer flex flex-col justify-center items-center pt-6 pb-3 transition ease-in-out duration-600 ${
            currentColor === "yellow"
              ? "scale-110 transition ease-in-out duration-800"
              : ""
          }`}
          variants={imgVariant1}
          onClick={handleClickYellow}
        >
          <img
            src={yellow}
            className={`w-1/4 transition ease-in-out duration-500 hover:opacity-100 ${
              currentColor === "yellow"
                ? "opacity-100 transition ease-in-out duration-800"
                : "opacity-50"
            }`}
            alt="Yellowish-orange recycle symbol."
          ></img>
          <h3
            className={`dm-sans-bold font-semibold text-xs sm:text-base md:text-xl`}
          >
            All Natural
          </h3>
        </motion.div>
        {/* green */}
        <motion.div
          className={`col-start-3 cursor-pointer flex flex-col justify-center items-center pt-6 pb-3 transition ease-in-out duration-600 ${
            currentColor === "green"
              ? "scale-110 transition ease-in-out duration-800"
              : ""
          }`}
          variants={imgVariant2}
          onClick={handleClickGreen}
        >
          <img
            src={green}
            className={`w-1/4 transition ease-in-out duration-500 hover:opacity-100 ${
              currentColor === "green"
                ? "opacity-100 transition ease-in-out duration-800"
                : "opacity-50"
            }`}
            alt="Green recycle symbol."
          ></img>
          <h3 className="dm-sans-bold font-semibold text-xs sm:text-base md:text-xl">
            Green Solution
          </h3>
        </motion.div>
        {/* blue */}
        <motion.div
          className={`col-start-4 cursor-pointer flex flex-col justify-center items-center pt-6 pb-3 transition ease-in-out duration-600 ${
            currentColor === "blue"
              ? "scale-110 transition ease-in-out duration-800"
              : ""
          }`}
          variants={imgVariant3}
          onClick={handleClickBlue}
        >
          <img
            src={blue}
            className={`w-1/4 transition ease-in-out duration-500 hover:opacity-100 ${
              currentColor === "blue"
                ? "opacity-100 transition ease-in-out duration-800"
                : "opacity-50"
            }`}
            alt="Blue recycle symbol."
          ></img>
          <h3 className="dm-sans-bold font-semibold text-xs sm:text-base md:text-xl">
            Prevention First
          </h3>
        </motion.div>
      </motion.container>
      <div className="flex mb-20">
        {/* Yellow box */}
        <div
          className={`justify-center pt-5 py-5 px-8 flex-col text-center pb-20 ${
            currentColor === "yellow" ? "flex" : "hidden"
          }`}
        >
          <h2 className="title-text text-xl sm:text-2xl md:text-3xl lg:place-self-start lg:ml-10">
            An All Natural Solution
          </h2>
          <div className="grid grid-cols-6">
            <hr class="h-px mt-2 mb-4 col-start-3 col-end-5 lg:mr-20 lg:col-start-1 lg:col-end-4 bg-gray-300 border-0 dark:bg-gray-700 lg:ml-10" />
            <p className="col-start-2 col-end-6 lg:col-start-1 lg:col-end-4 lg:text-left font-medium text-sm sm:text-base md:text-lg mb-10 lg:mb-0 lg:ml-10">
              Mauris in sagittis metus. Sed sodales odio id sem sodales, sed
              bibendum risus ultrices. Maecenas magna velit, imperdiet vel dui
              id, eleifend fermentum odio. Integer at ultricies mi, nec eleifend
              dolor. Aliquam fermentum nunc at libero tempus, sed maximus erat
              placerat. Praesent in arcu vitae neque cursus pulvinar.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet a
              nisl sit amet facilisis. Vestibulum id tellus felis. Vestibulum
              efficitur dignissim pulvinar. Sed vulputate posuere ultrices.
              Integer blandit dui ut laoreet bibendum. Maecenas tristique, diam
              a mollis euismod, nunc erat ultricies orci, vel auctor ex nulla in
              erat. Ut imperdiet, purus a porttitor dignissim, nisi neque
              ultrices eros, a commodo lectus lectus egestas leo. Ut quis neque
              elit.
            </p>
            <img
              src={natural}
              className="col-start-2 col-end-6 lg:col-start-4 lg:col-end-7 lg:w-3/4 place-self-center"
              alt="Kitchen wall with light purple hand towel, bowl of oranges, glasses of water, and a bit of the kitchen counter. Close up."
            ></img>
          </div>
        </div>
        {/* Green box */}
        <div
          className={`justify-center pt-5 py-5 px-8 flex-col text-center pb-20 ${
            currentColor === "green" ? "flex" : "hidden"
          }`}
        >
          <h2 className="title-text text-xl sm:text-2xl md:text-3xl lg:place-self-start lg:ml-10">
            A Green Solution
          </h2>
          <div className="grid grid-cols-6">
            <hr class="h-px mt-2 mb-4 col-start-3 col-end-5 lg:mr-20 lg:col-start-1 lg:col-end-4 bg-gray-300 border-0 dark:bg-gray-700 lg:ml-10" />
            <p className="col-start-2 col-end-6 lg:col-start-1 lg:col-end-4 lg:text-left font-medium text-sm sm:text-base md:text-lg mb-10 lg:mb-0 lg:ml-10">
              Mauris in sagittis metus. Sed sodales odio id sem sodales, sed
              bibendum risus ultrices. Maecenas magna velit, imperdiet vel dui
              id, eleifend fermentum odio. Integer at ultricies mi, nec eleifend
              dolor. Aliquam fermentum nunc at libero tempus, sed maximus erat
              placerat. Praesent in arcu vitae neque cursus pulvinar.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet a
              nisl sit amet facilisis. Vestibulum id tellus felis. Vestibulum
              efficitur dignissim pulvinar. Sed vulputate posuere ultrices.
              Integer blandit dui ut laoreet bibendum. Maecenas tristique, diam
              a mollis euismod, nunc erat ultricies orci, vel auctor ex nulla in
              erat. Ut imperdiet, purus a porttitor dignissim, nisi neque
              ultrices eros, a commodo lectus lectus egestas leo. Ut quis neque
              elit.
            </p>
            <img
              src={greenPhoto}
              className="col-start-2 col-end-6 lg:col-start-4 lg:col-end-7 lg:w-3/4 place-self-center"
              alt="Close up of small, green plant sprouting from the ground. Blurry background of soil."
            ></img>
          </div>
        </div>
        {/* Blue box */}
        <div
          className={`justify-center pt-5 py-5 px-8 flex-col text-center pb-20 ${
            currentColor === "blue" ? "flex" : "hidden"
          }`}
        >
          <h2 className="title-text text-xl sm:text-2xl md:text-3xl lg:place-self-start lg:ml-10">
            Prevention First
          </h2>
          <div className="grid grid-cols-6">
            <hr class="h-px mt-2 mb-4 col-start-3 col-end-5 lg:mr-20 lg:col-start-1 lg:col-end-4 bg-gray-300 border-0 dark:bg-gray-700 lg:ml-10" />
            <p className="col-start-2 col-end-6 lg:col-start-1 lg:col-end-4 lg:text-left font-medium text-sm sm:text-base md:text-lg mb-10 lg:mb-0 lg:ml-10">
              Mauris in sagittis metus. Sed sodales odio id sem sodales, sed
              bibendum risus ultrices. Maecenas magna velit, imperdiet vel dui
              id, eleifend fermentum odio. Integer at ultricies mi, nec eleifend
              dolor. Aliquam fermentum nunc at libero tempus, sed maximus erat
              placerat. Praesent in arcu vitae neque cursus pulvinar.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet a
              nisl sit amet facilisis. Vestibulum id tellus felis. Vestibulum
              efficitur dignissim pulvinar. Sed vulputate posuere ultrices.
              Integer blandit dui ut laoreet bibendum. Maecenas tristique, diam
              a mollis euismod, nunc erat ultricies orci, vel auctor ex nulla in
              erat. Ut imperdiet, purus a porttitor dignissim, nisi neque
              ultrices eros, a commodo lectus lectus egestas leo. Ut quis neque
              elit.
            </p>
            <img
              src={blueGirl}
              className="col-start-2 col-end-6 lg:col-start-4 lg:col-end-7 lg:w-3/4 place-self-center"
              alt="Young girl outside, wearing a tan fedora, jean jacket, and a blue and white button-up top. She  has red hair, is holding a paper airplane, and is smiling off into the distance."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
