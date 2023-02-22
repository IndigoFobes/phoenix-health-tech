import React from "react";
import indigo from "../assets/indigo_recent.JPG";

export default function About() {
  return (
    <div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-5 mb-5 mt-10">
          <h1 className="font-sans font-semibold text-2xl text-blue-900 ">
            About Phoenix Health Technology
          </h1>
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
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-end-5 mb-5 mt-10">
          <h1 className="font-sans font-semibold text-2xl text-blue-900 ml-10">
            Meet Our Team
          </h1>
        </div>
        {/* Team */}
        <div className="col-start-2 col-end-6">
          {/* First image/description: Will Harris, President & CEO */}
          <div className="grid grid-cols-7">
            <div className="px-4 col-start-1 col-end-3 rounded-full flex justify-start my-10">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Will Harris */}
            <div className="col-start-3 col-end-8 flex ml-20 items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">
                  Will Harris, President {`&`} CEO
                </h2>
                <p>
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
          <div className="grid grid-cols-7">
            <div className="px-4 col-start-1 col-end-3 rounded-full flex justify-start my-10">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Robert D’Agostino */}
            <div className="col-start-3 col-end-8 flex ml-20 items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">
                  Robert D’Agostino, Legal Advisor
                </h2>
                <p>
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
          <div className="grid grid-cols-7">
            <div className="px-4 col-start-1 col-end-3 rounded-full flex justify-start my-10">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Brian Douglas */}
            <div className="col-start-3 col-end-8 flex ml-20 items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">
                  Brian Douglas, Corporate Counsel
                </h2>
                <p>
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
          <div className="grid grid-cols-7">
            <div className="px-4 col-start-1 col-end-3 rounded-full flex justify-start my-10">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Kevin Conboy */}
            <div className="col-start-3 col-end-8 flex ml-20 items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Kevin Conboy, Board Member</h2>
                <p>
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
          <div className="grid grid-cols-7">
            <div className="px-4 col-start-1 col-end-3 rounded-full flex justify-start my-10">
              <img
                className="w-max rounded-full align-middle object-cover object-top"
                src={indigo}
                alt="Indigo Fobes, smiling big with a colorful scarf on."
              ></img>
            </div>
            {/* Text about Dudley Wells */}
            <div className="col-start-3 col-end-8 flex ml-20 items-center">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold">
                  Dudley Wells, Chief Information Officer
                </h2>
                <p>
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
