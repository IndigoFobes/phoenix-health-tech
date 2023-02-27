import React from "react";

export default function Learn() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-3xl font-semibold text-blue-900 mb-10">
        What is wrong with your HVAC unit?
      </h1>
      <div className="p-4 bg-red-500 rounded-md">
        <iframe
          className=""
          src="https://www.youtube.com/embed/C0DPdy98e4c"
          width={1000}
          height={500}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
      <div className="grid grid-cols-8">
        <p className="col-start-3 col-end-7 p-6 pt-10 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          laoreet a nisl sit amet facilisis. Vestibulum id tellus felis.
          Vestibulum efficitur dignissim pulvinar. Sed vulputate posuere
          ultrices. Integer blandit dui ut laoreet bibendum. Maecenas tristique,
          diam a mollis euismod, nunc erat ultricies orci, vel auctor ex nulla
          in erat. Ut imperdiet, purus a porttitor dignissim, nisi neque
          ultrices eros, a commodo lectus lectus egestas leo. Ut quis neque
          elit. In congue elit rhoncus justo viverra congue. Fusce ultricies
          nisi a lacus gravida, in efficitur est finibus. Aliquam varius massa
          vel mi ornare malesuada.
        </p>
      </div>
      {/* arrow down to next section */}
      <h1 className="text-3xl font-semibold text-blue-900 mb-10 mt-40">
        What does PHT do to fix it?
      </h1>
    </div>
  );
}
