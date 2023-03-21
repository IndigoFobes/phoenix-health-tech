import React from "react";
import indigo from "../assets/indigo_recent.JPG";

export default function About() {
  return (
    <div>
      <div className="grid grid-cols-6">
        <container className="col-start-1 col-end-7 lg:col-start-2 lg:col-end-6 mx-8 mb-5 mt-10 md:mx-20 ">
          <h1 className="font-sans text-center md:text-left font-semibold sm:text-xl md:text-2xl lg:text-3xl title-text ">
            About Phoenix Health Technology
          </h1>
        </container>
      </div>
      <div className="grid grid-cols-6">
        <container className="col-start-1 col-end-7 mx-8 md:mx-20 lg:col-start-2 lg:col-end-6 text-justify md:text-left text-sm sm:text-base">
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
      <div className="mb-10 md:mb-20 grid grid-cols-6">
        <div className="col-start-2 col-end-6 mb-5 mt-10">
          <h1 className="font-sans text-center font-semibold text-2xl sm:text-xl md:text-2xl title-text sm:ml-10">
            Meet Our Team
          </h1>
        </div>
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
                  Text about Will Harris, CEO. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Vestibulum laoreet a nisl sit
                  amet facilisis. Vestibulum id tellus felis. Vestibulum
                  efficitur dignissim pulvinar. Sed vulputate posuere ultrices.
                  Integer blandit dui ut laoreet bibendum. Maecenas tristique,
                  diam a mollis euismod, nunc erat ultricies orci, vel auctor ex
                  nulla in erat. Ut imperdiet, purus a porttitor dignissim, nisi
                  neque ultrices eros, a commodo lectus lectus egestas leo. Ut
                  quis neque elit. In congue elit rhoncus justo viverra congue.
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
                  Text about Robert D’Agostino, Legal Advisor. Lorem ipsum dolor
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
          {/* Fourth image/description: Kevin Conboy, Board Member */}
          <div className="flex flex-col place-items-center my-5 md:my-10 sm:grid sm:grid-cols-7">
            <div className="w-1/3 mb-5 sm:mb-0 sm:w-full h-fit sm:col-start-1 sm:col-end-3 rounded-full flex">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Kevin Conboy */}
            <div className="col-start-3 col-end-8 flex sm:ml-10 items-center">
              <div className="flex flex-col gap-2 text-justify">
                <h2 className="font-semibold text-center sm:text-left">
                  Kevin Conboy, Board Member
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Text about Kevin Conboy, Board Member. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Vestibulum laoreet a nisl
                  sit amet facilisis. Vestibulum id tellus felis. Vestibulum
                  efficitur dignissim pulvinar. Sed vulputate posuere ultrices.
                  Integer blandit dui ut laoreet bibendum. Maecenas tristique,
                  diam a mollis euismod, nunc erat ultricies orci, vel auctor ex
                  nulla in erat. Ut imperdiet, purus a porttitor dignissim, nisi
                  neque ultrices eros, a commodo lectus lectus egestas leo. Ut
                  quis neque elit. In congue elit rhoncus justo viverra congue.
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
                  Dudley Wells, Chief Information Officer
                </h2>
                <p className="text-xs sm:text-sm md:text-base">
                  Text about Dudley Wells, Chief Information Officer. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                  laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
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
        </div>
      </div>
    </div>
  );
}
