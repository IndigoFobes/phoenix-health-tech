import React, { useRef } from "react";
import indigo from "../assets/indigo_recent.JPG";
import missionShape from "../assets/pht_mission_shape.png";
import missionShapeLight from "../assets/pht_mission_shape_light.png";
import office from "../assets/pexels-office.jpg";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
} from "framer-motion";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Text() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <div ref={ref} className="h-[400px]">
//       <motion.h1
//         style={{ y }}
//         className="rounded-sm meet-team text-center font-semibold dm-sans-bold text-white"
//       >
//         Meet Our Team
//       </motion.h1>
//     </div>
//   );
// }

const textVariant = {
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
      duration: 1,
    },
  },
};

export default function About({ currentPage, handlePageChange }) {
  return (
    <div className="bg-fixed about-bg relative">
      {/* <div className="shadow-inner pb-8 bg-gray-200 opacity-80 w-full h-[300px] sm:h-[330px] md:h-[360px] lg:h-[320px]"></div> */}
      <div className="bg-gray-200/80 py-10">
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 lg:col-end-5 mb-5 mx-10">
            <h1 className="text-center lg:text-left our-mission title-text">
              Our Mission
            </h1>
          </container>
        </div>
        <div className="grid grid-cols-6">
          <container className="col-start-1 col-end-7 lg:col-end-5 xl:col-end-4 mb-5 mx-10 text-center dm-sans-med lg:text-left sm:text-lg md:text-xl">
            <p>
              We exist to create a safe and healthy environment for homes and
              workspaces using green, state of the art technology based on all
              natural and organic ingredients.
            </p>
          </container>
        </div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="my-40">
          <motion.h1
            variants={textVariant}
            className="rounded-sm meet-team text-center font-semibold dm-sans-bold text-[#0E4370]"
          >
            Meet Our Team
          </motion.h1>
        </div>
      </motion.div>
      {/* <div className="bg-pink-300">
          <ScrollPage>
            <Animator animation={scrollAnimation}>
              <h2 className="text-black font-bold z-10">
                Working on scrolly thingy.
              </h2>
            </Animator>
          </ScrollPage>
        </div> */}
      <div className="mb-10 z-10 pt-10 md:mb-20 grid grid-cols-6 bg-white">
        {/* Team */}
        <div className="col-start-1 col-end-7 px-8 md:px-20 lg:px-0 lg:col-start-2 lg:col-end-6">
          {/* First image/description: Will Harris, President & CEO */}
          <div className="flex flex-col place-items-center my-5 md:my-10 sm:grid sm:grid-cols-7">
            <div className="w-1/3 mb-5 sm:mb-0 sm:w-full h-fit sm:col-start-1 sm:col-end-3 rounded-full flex">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Will Harris */}
            <div className="sm:col-start-3 sm:col-end-8 flex sm:ml-10 items-center">
              <div className="flex flex-col gap-2 text-justify">
                <h2 className="font-semibold text-center sm:text-left">
                  Will Harris, President {`&`} CEO
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Will has always been a visionary, using his creative energy to
                  improve everything he encounters in this world. He strives to
                  be the best at anything he undertakes. For instance, when he
                  took up ballroom dancing as a form of exercise, he parlayed
                  that into numerous dance competition awards and trophies. He
                  was also the host of his own nature show in 1990’s, blending
                  his professional career with his love for nature. For many
                  years, Will was an architect and builder by profession. During
                  that time, through demolition and building, he observed his
                  crews taking copper coils from old HVAC systems, only to sell
                  the copper for extra cash. But after witnessing the disgusting
                  mold buildup on those coils, he asked himself, “Is this what
                  our families and babies breath everyday?”. It was that
                  shocking revelation that led him to envision a solution to
                  make the air we breathe better. After fifteen years of
                  envisioning that dream, that passion has culminated into
                  Phoenix Health Technology.
                </p>
              </div>
            </div>
          </div>
          {/* Second image/description: Robert D’Agostino, Legal Advisor */}
          <div className="flex flex-col place-items-center my-5 md:my-10 sm:grid sm:grid-cols-7">
            <div className="w-1/3 mb-5 sm:mb-0 sm:w-full h-fit sm:col-start-1 sm:col-end-3 rounded-full flex">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Robert D’Agostino */}
            <div className="col-start-3 col-end-8 flex sm:ml-10 items-center">
              <div className="flex flex-col gap-2 text-justify">
                <h2 className="font-semibold text-center sm:text-left">
                  Robert D’Agostino, Legal Advisor
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Robert D’Agostino joins Phoenix Health Technology as Legal
                  Advisor. He has a long and illustrious career in the Law,
                  serving as both Professor, Dean and Deputy Assistant Attorney
                  General. Professor D’Agostino practiced bankruptcy and
                  commercial law for 20 years between careers in academia. Prior
                  to joining John Marshall in 1995 and after practicing law for
                  some 15 years, Professor D’Agostino was a tenured professor at
                  what is now Widener Law School in Delaware. In 1981–1982, he
                  took a two year leave of absence from Widener to serve as a
                  presidential appointee to the U.S. Department of Justice under
                  President Ronald Reagan, where he served as an Deputy
                  Assistant Attorney General for Civil Rights. Professor
                  D’Agostino also served as Dean from 1996 to 2000. His
                  publications deal with topics related to bankruptcy, civil
                  rights, and constitutional law. An avid bicyclist, “Dag” is
                  also a political activist.
                </p>
              </div>
            </div>
          </div>
          {/* Third image/description: Brian Douglas, Corporate Counsel */}
          <div className="flex flex-col place-items-center my-5 md:my-10 sm:grid sm:grid-cols-7">
            <div className="w-1/3 mb-5 sm:mb-0 sm:w-full h-fit sm:col-start-1 sm:col-end-3 rounded-full flex">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Brian Douglas */}
            <div className="col-start-3 col-end-8 flex sm:ml-10 items-center">
              <div className="flex flex-col gap-2 text-justify">
                <h2 className="font-semibold text-center sm:text-left">
                  Brian Douglas, Corporate Counsel
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Text about Brian Douglas, Corporate Counsel. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Vestibulum laoreet a
                  nisl sit amet facilisis. Vestibulum id tellus felis.
                  Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
                  ultrices. Integer blandit dui ut laoreet bibendum. Maecenas
                  tristique, diam a mollis euismod, nunc erat ultricies orci,
                  vel auctor ex nulla in erat. Ut imperdiet, purus a porttitor
                  dignissim, nisi neque ultrices eros, a commodo lectus lectus
                  egestas leo. Ut quis neque elit. In congue elit rhoncus justo
                  viverra congue.
                </p>
              </div>
            </div>
          </div>
          {/* Fifth image/description: Dudley Wells, Chief Information Officer */}
          <div className="flex flex-col place-items-center my-5 md:my-10 sm:grid sm:grid-cols-7">
            <div className="w-1/3 mb-5 sm:mb-0 sm:w-full h-fit sm:col-start-1 sm:col-end-3 rounded-full flex">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Dudley Wells */}
            <div className="col-start-3 col-end-8 flex sm:ml-10 items-center">
              <div className="flex flex-col gap-2 text-justify">
                <h2 className="font-semibold text-center sm:text-left">
                  Indigo Fobes, Web Designer and Developer
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Indigo grew up in Alpharetta, Georgia, and graduated in 2021
                  from Texas Christian University with a degree in musical
                  theatre. After graduating and getting married, she studied
                  coding with Georgia Tech for six months in order to become a
                  certified full-stack web developer. She now works as a
                  freelance web developer and an actress. She is grateful to God
                  for so many opportunities to create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
