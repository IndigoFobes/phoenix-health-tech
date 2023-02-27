import React, { useState } from "react";
// import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import orange from "../assets/orange_triangle_pht.png";
import green from "../assets/green_triangle_pht.png";
import blue from "../assets/blue_triangle_pht.png";

// import Modal from "../components/Modal";

export default function Home() {
  const [isHoveringYellow, setisHoveringYellow] = useState(false);

  const [isHoveringGreen, setisHoveringGreen] = useState(false);

  const [isHoveringBlue, setisHoveringBlue] = useState(false);

  // handle mouse enter yellow box
  function handleMouseEnterYellow(e) {
    setisHoveringYellow(true);
  }

  function handleMouseLeaveYellow(e) {
    setisHoveringYellow(false);
  }

  // handle mouse enter green box
  function handleMouseEnterGreen(e) {
    setisHoveringGreen(true);
  }

  function handleMouseLeaveGreen(e) {
    setisHoveringGreen(false);
  }

  // handle mouse enter blue box
  function handleMouseEnterBlue(e) {
    setisHoveringBlue(true);
  }

  function handleMouseLeaveBlue(e) {
    setisHoveringBlue(false);
  }

  return (
    <div>
      <div className="grid grid-cols-6">
        <container className="col-start-2 col-end-5 mb-5 mt-10">
          <h1 className="font-sans font-semibold text-2xl text-blue-900 ">
            The Phoenix Health Technology Solution
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
            varius massa vel mi ornare malesuada. Suspendisse non ante aliquet
            diam bibendum viverra vel id felis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            interdum, dui vitae dapibus gravida, magna justo blandit sapien, nec
            convallis justo ex posuere erat. Curabitur quis dui mauris.
            Vestibulum sollicitudin viverra suscipit.
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
        </container>
      </div>
      {/* placeholder icons */}
      <container className="flex justify-around mt-20 mx-60">
        <div
          className="flex flex-col justify-center items-center mt-1.5"
          onMouseEnter={handleMouseEnterYellow}
          onMouseLeave={handleMouseLeaveYellow}
        >
          <img src={orange} className="w-1/6"></img>
          <h3 className="font-semibold text-xl">All Natural</h3>
        </div>
        <div
          className="flex flex-col justify-center items-center mt-1.5"
          onMouseEnter={handleMouseEnterGreen}
          onMouseLeave={handleMouseLeaveGreen}
        >
          <img src={green} className="w-1/6"></img>
          <h3 className="font-semibold text-xl">Green Solution</h3>
        </div>
        <div
          className="flex flex-col justify-center items-center mt-1.5"
          onMouseEnter={handleMouseEnterBlue}
          onMouseLeave={handleMouseLeaveBlue}
        >
          <img src={blue} className="w-1/6"></img>
          <h3 className="font-semibold text-xl">Prevention First</h3>
        </div>
      </container>
      {/* Conditionally render extra space if hover is not happening */}
      {!isHoveringYellow && !isHoveringGreen && !isHoveringBlue && (
        <div className="flex justify-center mt-40 text-2xl font-medium mb-40">
          <h3 className="bg-sky-400 px-10 py-6 rounded-md opacity-75">
            Mouse over an icon to learn more.
          </h3>
        </div>
      )}
      {/* Yellow box */}
      <div
        className={`bg-amber-300 justify-center mt-10 mx-60 rounded-md py-10 px-20 flex-col text-center gap-5 mb-20 ${
          isHoveringYellow ? "flex" : "hidden"
        }`}
      >
        <h2 className="font-semibold text-2xl">An All Natural Solution</h2>
        <p className="font-medium">
          Mauris in sagittis metus. Sed sodales odio id sem sodales, sed
          bibendum risus ultrices. Maecenas magna velit, imperdiet vel dui id,
          eleifend fermentum odio. Integer at ultricies mi, nec eleifend dolor.
          Aliquam fermentum nunc at libero tempus, sed maximus erat placerat.
          Praesent in arcu vitae neque cursus pulvinar.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum laoreet a nisl sit amet
          facilisis. Vestibulum id tellus felis. Vestibulum efficitur dignissim
          pulvinar. Sed vulputate posuere ultrices. Integer blandit dui ut
          laoreet bibendum. Maecenas tristique, diam a mollis euismod, nunc erat
          ultricies orci, vel auctor ex nulla in erat. Ut imperdiet, purus a
          porttitor dignissim, nisi neque ultrices eros, a commodo lectus lectus
          egestas leo. Ut quis neque elit.
        </p>
      </div>
      {/* Green box */}
      <div
        className={`bg-lime-500 justify-center mt-10 mx-60 rounded-md py-10 px-20 flex-col text-center gap-5 mb-20 ${
          isHoveringGreen ? "flex" : "hidden"
        }`}
      >
        <h2 className="font-semibold text-2xl">A Green Solution</h2>
        <p className="font-medium">
          Mauris in sagittis metus. Sed sodales odio id sem sodales, sed
          bibendum risus ultrices. Maecenas magna velit, imperdiet vel dui id,
          eleifend fermentum odio. Integer at ultricies mi, nec eleifend dolor.
          Aliquam fermentum nunc at libero tempus, sed maximus erat placerat.
          Praesent in arcu vitae neque cursus pulvinar.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum laoreet a nisl sit amet
          facilisis. Vestibulum id tellus felis. Vestibulum efficitur dignissim
          pulvinar. Sed vulputate posuere ultrices. Integer blandit dui ut
          laoreet bibendum. Maecenas tristique, diam a mollis euismod, nunc erat
          ultricies orci, vel auctor ex nulla in erat. Ut imperdiet, purus a
          porttitor dignissim, nisi neque ultrices eros, a commodo lectus lectus
          egestas leo. Ut quis neque elit.
        </p>
      </div>
      {/* Blue box */}
      <div
        className={`bg-sky-400 justify-center mt-10 mx-60 rounded-md py-10 px-20 flex-col text-center gap-5 mb-20 ${
          isHoveringBlue ? "flex" : "hidden"
        }`}
      >
        <h2 className="font-semibold text-2xl">Prevention First</h2>
        <p className="font-medium">
          Mauris in sagittis metus. Sed sodales odio id sem sodales, sed
          bibendum risus ultrices. Maecenas magna velit, imperdiet vel dui id,
          eleifend fermentum odio. Integer at ultricies mi, nec eleifend dolor.
          Aliquam fermentum nunc at libero tempus, sed maximus erat placerat.
          Praesent in arcu vitae neque cursus pulvinar.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum laoreet a nisl sit amet
          facilisis. Vestibulum id tellus felis. Vestibulum efficitur dignissim
          pulvinar. Sed vulputate posuere ultrices. Integer blandit dui ut
          laoreet bibendum. Maecenas tristique, diam a mollis euismod, nunc erat
          ultricies orci, vel auctor ex nulla in erat. Ut imperdiet, purus a
          porttitor dignissim, nisi neque ultrices eros, a commodo lectus lectus
          egestas leo. Ut quis neque elit.
        </p>
      </div>
    </div>
  );
}
