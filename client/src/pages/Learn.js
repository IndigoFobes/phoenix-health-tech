import React, { useState, useEffect } from "react";
import GreenOne from "../assets/green_1_pht(update).png";
import GreenTwo from "../assets/green_2_pht(update).png";
import GreenThree from "../assets/green_3_pht(update).png";
import GreyOne from "../assets/grey_1_pht(update).png";
import GreyTwo from "../assets/grey_2_pht(update).png";
import GreyThree from "../assets/grey_3_pht(update).png";

export default function Learn({ currentPage, handlePageChange }) {
  // default video is number 1
  const [currentNumber, setCurrentNumber] = useState(1);

  function HandleClickOne(e) {
    e.currentTarget.src = GreenOne;
    setCurrentNumber(1);
    handleGreenOne();
  }

  function HandleClickTwo(e) {
    e.currentTarget.src = GreenTwo;
    setCurrentNumber(2);
    handleGreenTwo();
  }

  function HandleClickThree(e) {
    e.currentTarget.src = GreenThree;
    setCurrentNumber(3);
    handleGreenThree();
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
  let text;

  if (currentNumber === 1) {
    video = (
      <div className="p-1 border-4 border-lime-500 rounded-md">
        <iframe
          className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
          // Handle hover (or click) to display proper animation
          src={"https://www.youtube.com/embed/C0DPdy98e4c"}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
    );
    text = (
      <p className="col-start-1 col-end-9 md:col-start-2 md:col-end-8 px-6 md:p-0">
        This is a fun fun testing video. 3 2 1. Very simple. This is a fun fun
        testing video. 3 2 1. Very simple. This is a fun fun testing video. 3 2
        1. Very simple. This is a fun fun testing video. 3 2 1. Very simple.
        This is a fun fun testing video. 3 2 1. Very simple.
      </p>
    );
    console.log(video.props.children[0].props);
    //handleGreenOne();
  } else if (currentNumber === 2) {
    video = (
      <div className="p-1 border-4 border-lime-500 rounded-md">
        <iframe
          className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
          // Handle hover (or click) to display proper animation
          src="https://www.youtube.com/embed/1prweT95Mo0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
    );
    text = (
      <p className="col-start-1 col-end-9 md:col-start-2 md:col-end-8 px-6 md:p-0">
        Yo Yo Ma is my FAVORITE. Especially playing Bach, the greatest musician
        of all time. Yo Yo Ma is my FAVORITE. Especially playing Bach, the
        greatest musician of all time. Yo Yo Ma is my FAVORITE. Especially
        playing Bach, the greatest musician of all time. Yo Yo Ma is my
        FAVORITE. Especially playing Bach, the greatest musician of all time. Yo
        Yo Ma is my FAVORITE. Especially playing Bach, the greatest musician of
        all time.
      </p>
    );
    // handleGreenTwo();
  } else if (currentNumber === 3) {
    video = (
      <div className="p-1 border-4 border-lime-500 rounded-md">
        <iframe
          className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
          // Handle hover (or click) to display proper animation
          src="https://www.youtube.com/embed/BA-Wi4fdcVE"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
    );
    text = (
      <p className="col-start-1 col-end-9 md:col-start-2 md:col-end-8 px-6 md:p-0">
        Austin Stone is also wonderful. Worship the LORD!! Austin Stone is also
        wonderful. Worship the LORD!! Austin Stone is also wonderful. Worship
        the LORD!! Austin Stone is also wonderful. Worship the LORD!! Austin
        Stone is also wonderful. Worship the LORD!! Austin Stone is also
        wonderful. Worship the LORD!!
      </p>
    );
    // handleGreenThree();
  } else {
    video = <p>No video to display</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className=" font-dMSans text-xl md:text-2xl lg:text-3xl title-text mb-10">
        What is wrong with your HVAC unit?
      </h1>
      <div className="p-1 border-4 border-red-500 rounded-md">
        <iframe
          className="rounded-sm sm:w-[calc(1000px*1/2)] sm:h-[calc(500px*1/2)] md:w-[calc(1000px*2/3)] md:h-[calc(500px*2/3)] lg:w-[1000px] lg:h-[500px]"
          src="https://www.youtube.com/embed/C0DPdy98e4c"
          // width={1000}
          // height={500}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
      </div>
      <div className="grid grid-cols-8 mt-10 text-justify text-sm sm:text-base md:text-lg">
        <p className="col-start-1 col-end-9 md:col-start-2 md:col-end-8 px-6 md:p-0">
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
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold title-text mb-10 mt-10 sm:mt-20 md:mt-40">
        What does PHT do to fix it?
      </h1>
      {/* Numbers for hover effect */}
      <div className="flex space-x-10 sm:space-x-20 md:space-x-40 pb-5 md:pb-20 mx-10">
        <div>
          <img
            src={GreenOne}
            className="w-60 hover:cursor-pointer"
            onClick={HandleClickOne}
            id="one"
            alt="Number one"
          ></img>
        </div>
        <div>
          <img
            src={GreyTwo}
            className="w-60 hover:cursor-pointer"
            onClick={HandleClickTwo}
            id="two"
            alt="Number two"
          ></img>
        </div>
        <div>
          <img
            src={GreyThree}
            className="w-60 hover:cursor-pointer"
            onClick={HandleClickThree}
            id="three"
            alt="Number three"
          ></img>
        </div>
      </div>
      {video}
      <div className="grid grid-cols-8 mt-10 text-justify text-sm sm:text-base md:text-lg bg-lime-100 w-full p-5">
        {text}
      </div>
    </div>
  );
}
