import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import indigo from "../assets/indigo_recent.JPG";
import triangles from "../assets/triangle–design.png";

const Testimonials = () => {
  return (
    <div className="text-center flex flex-col bg-[#F8B140] pt-20 pb-10 px-10 relative">
      <h2 className="testimonials dm-sans-bold mb-20">
        Hear From Our Customers:
      </h2>
      <div className="flex justify-center">
        <div className="w-[310px] sm:w-4/5 lg:w-3/5 pb-10 mb-0 xl:mb-20">
          <Slider>
            <Card
              text={`I am so grateful for this product. More text here. I love PHT. Etc.`}
              name={`John Doe`}
            />
            <Card
              text={`Text from Carly. I am so grateful for this product. More text here. I love PHT. Etc.`}
              name={`Carly Moore`}
            />
            <Card
              text={`Text from Sandy. I am so grateful for this product. More text here. I love PHT. Etc.`}
              name={`Sandy Cheeks`}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({ text, name }) => {
  return (
    <div className="text-center bg-white/70 rounded-sm mx-2 sm:mx-10 py-10 px-5 sm:px-10">
      <p className="mb-5 dm-sans-med text-xl">{text}</p>
      <div className="flex justify-center align-center">
        <div className="w-[50px] rounded-full h-fit flex">
          <img
            className="w-max rounded-full align-middle object-cover object-top"
            src={indigo}
          ></img>
        </div>
        <p className="dm-sans text-xl flex self-center ml-5">{name}</p>
      </div>
    </div>
  );
};

export default Testimonials;
