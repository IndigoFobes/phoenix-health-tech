import React, { useState, useEffect } from "react";
import Animation from "../assets/HVAC_Animation_MP4.mp4";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
} from "framer-motion";

const textVariant1 = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
      duration: 0.8,
    },
  },
};

const textVariant2 = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const textVariant3 = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
      duration: 0.8,
      delay: 0.6,
    },
  },
};

export default function Learn({ currentPage, handlePageChange }) {
  // default video is number 1
  const [currentNumber, setCurrentNumber] = useState(1);

  function HandleClickOne(e) {
    // e.currentTarget.src = GreenOne;
    setCurrentNumber(1);
    handleGreenOne();
  }

  function HandleClickTwo(e) {
    // e.currentTarget.src = GreenTwo;
    setCurrentNumber(2);
    handleGreenTwo();
  }

  function HandleClickThree(e) {
    // e.currentTarget.src = GreenThree;
    setCurrentNumber(3);
    handleGreenThree();
  }

  // non-active icons are grey again
  function handleGreenOne() {
    const two = document.getElementById("two");

    const three = document.getElementById("three");
  }

  function handleGreenTwo() {
    const one = document.getElementById("one");

    const three = document.getElementById("three");
  }

  function handleGreenThree() {
    const one = document.getElementById("one");

    const two = document.getElementById("two");
  }

  // Render video based on currentNumber
  let video;
  let text;

  video = (
    <div className="absolute top-2/3 translate-y-2/3 sm:top-1/2 sm:translate-y-2/3 md:top-1/2 md:translate-y-1/2 lg:left-1/2 lg:top-0 lg:-translate-x-1/2 lg:translate-y-4/5 py-2 px-1 border-4 border-lime-500 rounded-md">
      {/* <div className="py-20 px-40 dm-sans-med">Animation coming soon!</div> */}
      <iframe
        className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
        // Handle hover (or click) to display proper animation
        src={Animation}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div>
  );

  if (currentNumber === 1) {
    text = (
      <p>{`Mold and fungus are in the air and grow in your air conditioning system.`}</p>
    );
  } else if (currentNumber === 2) {
    text = (
      <p>{`The Phoenix Module sprays our proprietary formula on the coils, cleaning the mold spores, and washes them out the condensate drain.`}</p>
    );
  } else if (currentNumber === 3) {
    text = (
      <p>{`After a programable pause, the system starts and sprays again, cleaning the ductwork and ridding your system of mold, fungus, and mycotoxins!`}</p>
    );
  } else {
    text = (
      <p>{`Oops. Something went arwy. Check back later to see this bit of text!`}</p>
    );
  }

  // IF VIDEO IS SPLIT INTO PARTS***
  // if (currentNumber === 1) {
  //   video = (
  //     <div className="py-2 px-1 border-4 border-lime-500 rounded-md">
  //       {/* <div className="py-20 px-40 dm-sans-med">Animation coming soon!</div> */}
  //       <iframe
  //         className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
  //         // Handle hover (or click) to display proper animation
  //         src={Animation}
  //         frameborder="0"
  //         allow="autoplay; encrypted-media"
  //         allowfullscreen
  //         title="video"
  //       />{" "}
  //     </div>
  //   );
  //   text = <p>Details coming soon.</p>;
  //   // console.log(video.props.children[0].props);
  //   //handleGreenOne();
  // } else if (currentNumber === 2) {
  //   video = (
  //     <div className="py-2 px-1 border-4 border-lime-500 rounded-md">
  //       <div className="py-20 px-40 dm-sans-med">Animation coming soon!</div>
  //       {/* <iframe
  //         className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
  //         // Handle hover (or click) to display proper animation
  //         src="https://www.youtube.com/embed/1prweT95Mo0"
  //         frameborder="0"
  //         allow="autoplay; encrypted-media"
  //         allowfullscreen
  //         title="video"
  //       />{" "} */}
  //     </div>
  //   );
  //   text = <p>Details coming soon.</p>;
  //   // handleGreenTwo();
  // } else if (currentNumber === 3) {
  //   video = (
  //     <div className="py-2 px-1 border-4 border-lime-500 rounded-md">
  //       <div className="py-20 px-40 dm-sans-med">Animation coming soon!</div>
  //       {/* <iframe
  //         className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
  //         // Handle hover (or click) to display proper animation
  //         src="https://www.youtube.com/embed/BA-Wi4fdcVE"
  //         frameborder="0"
  //         allow="autoplay; encrypted-media"
  //         allowfullscreen
  //         title="video"
  //       />{" "} */}
  //     </div>
  //   );
  //   text = <p>Details coming soon.</p>;
  //   // handleGreenThree();
  // } else {
  //   video = <p>No video to display</p>;
  // }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-fixed flex flex-col justify-center items-center pb-20 w-full">
        <div className="bg-gray-200/80 py-10 w-full">
          <h1 className="dm-sans-bold learn-title title-text mb-10 text-center sm:mt-10">
            What is wrong with your HVAC unit?
          </h1>
          <div className="grid grid-cols-8 text-justify text-sm sm:text-base md:text-lg">
            {/* <p className="dm-sans col-start-1 col-end-9 md:col-start-2 md:col-end-8 px-6 md:p-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum laoreet a nisl sit amet facilisis. Vestibulum id tellus
              felis. Vestibulum efficitur dignissim pulvinar. Sed vulputate
              posuere ultrices. Integer blandit dui ut laoreet bibendum.
              Maecenas tristique, diam a mollis euismod, nunc erat ultricies
              orci, vel auctor ex nulla in erat. Ut imperdiet, purus a porttitor
              dignissim, nisi neque ultrices eros, a commodo lectus lectus
              egestas leo. Ut quis neque elit. In congue elit rhoncus justo
              viverra congue. Fusce ultricies nisi a lacus gravida, in efficitur
              est finibus. Aliquam varius massa vel mi ornare malesuada.
            </p> */}
            <p className="dm-sans col-start-1 col-end-9 md:col-start-2 md:col-end-8 px-6 md:p-0">
              Text coming soon! Check back later.
            </p>
          </div>
        </div>
        <div className="py-2 px-1 border-4 mt-10 border-red-500 rounded-md">
          {/* <iframe
            className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
            src="https://www.youtube.com/embed/C0DPdy98e4c"
            // width={1000}
            // height={500}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />{" "} */}
          <div className="py-20 px-40 dm-sans-med">Video coming soon!</div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="bg-fixed flex flex-col items-center w-full relative">
        <div className="bg-gray-200/80 py-10 pb-20 md:pb-40 mb-10 w-full flex flex-col">
          {/* arrow down to next section */}
          <h1 className="dm-sans-bold learn-title title-text text-center mb-10 sm:mt-10">
            What does PHT do to fix it?
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-9">
            <motion.ul
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="mx-5 md:mx-20 lg:col-start-1 lg:mr-0 lg:ml-20 col-end-5 flex flex-col gap-4 mb-10 text-center"
            >
              <motion.li
                variants={textVariant1}
                onClick={HandleClickOne}
                id="one"
                className={`dm-sans-med md:text-xl xl:text-2xl py-2 px-4 rounded-full cursor-pointer border-4 border-white hover:border-lime-500 ${
                  currentNumber === 1
                    ? "bg-lime-500 border-lime-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <p>{`1. Mold & fungus are in the air...`}</p>
              </motion.li>
              <motion.li
                variants={textVariant2}
                onClick={HandleClickTwo}
                id="two"
                className={`dm-sans-med md:text-xl xl:text-2xl py-2 px-4 rounded-full cursor-pointer border-4 border-white hover:border-lime-500 ${
                  currentNumber === 2
                    ? "bg-lime-500 border-lime-500 text-white "
                    : "bg-white text-black"
                }`}
              >
                <p>{`2. The Phoenix Module sprays...`}</p>
              </motion.li>
              <motion.li
                variants={textVariant3}
                onClick={HandleClickThree}
                id="three"
                className={`dm-sans-med md:text-xl xl:text-2xl py-2 px-4 rounded-full cursor-pointer border-4 border-white hover:border-lime-500 ${
                  currentNumber === 3
                    ? "bg-lime-500 border-lime-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <p>{`3. Sprays again to clean...`}</p>
              </motion.li>
            </motion.ul>
            <div className="dm-sans-med col-start-5 col-end-10 mx-5 md:mx-20 lg:mx-5 text-lg md:text-xl mb-10 px-3 lg:px-6">
              {text}
            </div>
          </div>
        </div>
        {/* Numbers for hover effect */}
        {/* switch hidden with "flex" */}
        {/* <div className="hidden space-x-10 sm:space-x-20 md:space-x-40 pb-5 md:pb-20 mx-10">
          <div>
            <img
              src={GreenOne}
              className="w-[200px] hover:cursor-pointer"
              onClick={HandleClickOne}
              id="one"
              alt="Number one"
            ></img>
          </div>
          <div>
            <img
              src={GreyTwo}
              className="w-[200px] hover:cursor-pointer"
              onClick={HandleClickTwo}
              id="two"
              alt="Number two"
            ></img>
          </div>
          <div>
            <img
              src={GreyThree}
              className="w-[200px] hover:cursor-pointer"
              onClick={HandleClickThree}
              id="three"
              alt="Number three"
            ></img>
          </div>
        </div> */}
        {/* White space */}

        {video}
      </div>
      <div className="h-[600px]"></div>
    </div>
  );
}
