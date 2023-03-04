import React, { useState } from "react";
import GreenOne from "../assets/1_green_pht.png";
import GreenTwo from "../assets/2_green_pht.png";
import GreenThree from "../assets/3_green_pht.png";
import GreyOne from "../assets/1_grey_pht.png";
import GreyTwo from "../assets/2_grey_pht.png";
import GreyThree from "../assets/3_grey_pht.png";

export default function Learn() {
  // default video is number 1
  const [currentNumber, setCurrentNumber] = useState(1);

  function handleClickOne(e) {
    e.currentTarget.src = GreenOne;
    setCurrentNumber(1);
  }

  function handleClickTwo(e) {
    e.currentTarget.src = GreenTwo;
    setCurrentNumber(2);
  }

  function handleClickThree(e) {
    e.currentTarget.src = GreenThree;
    setCurrentNumber(3);
  }

  // non-active icons are grey again
  function handleGreenOne() {
    const two = document.getElementById("two");
    two.src = GreyTwo;
    const three = document.getElementById("three");
    three.src = GreyThree;
  }

  function handleGreenTwo() {
    const one = document.getElementById("one");
    one.src = GreyOne;
    const three = document.getElementById("three");
    three.src = GreyThree;
  }

  function handleGreenThree() {
    const one = document.getElementById("one");
    one.src = GreyOne;
    const two = document.getElementById("two");
    two.src = GreyTwo;
  }

  // Render video based on currentNumber
  let video;

  if (currentNumber === 1) {
    video = (
      <div className="p-4 bg-lime-500 rounded-md mb-20">
        <iframe
          className=""
          // Handle hover (or click) to display proper animation
          src="https://www.youtube.com/embed/C0DPdy98e4c"
          width={1000}
          height={500}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
    );
    handleGreenOne();
  } else if (currentNumber === 2) {
    video = (
      <div className="p-4 bg-lime-500 rounded-md mb-20">
        <iframe
          className=""
          // Handle hover (or click) to display proper animation
          src="https://www.youtube.com/embed/1prweT95Mo0"
          width={1000}
          height={500}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
    );
    handleGreenTwo();
  } else if (currentNumber === 3) {
    video = (
      <div className="p-4 bg-lime-500 rounded-md mb-20">
        <iframe
          className=""
          // Handle hover (or click) to display proper animation
          src="https://www.youtube.com/embed/BA-Wi4fdcVE"
          width={1000}
          height={500}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
    );
    handleGreenThree();
  }

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
      {/* Numbers for hover effect */}
      <div className="flex space-x-40 pb-20">
        <div>
          <img
            src={GreyOne}
            className="w-60 hover:cursor-pointer"
            onClick={handleClickOne}
            id="one"
          ></img>
        </div>
        <div>
          <img
            src={GreyTwo}
            className="w-60 hover:cursor-pointer"
            onClick={handleClickTwo}
            id="two"
          ></img>
        </div>
        <div>
          <img
            src={GreyThree}
            className="w-60 hover:cursor-pointer"
            onClick={handleClickThree}
            id="three"
          ></img>
        </div>
      </div>
      {video}
      <button onClick={(e) => console.log(currentNumber)}>
        Current Number
      </button>
    </div>
  );
}
