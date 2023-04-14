import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  return (
    <div className="text-center flex flex-col mb-40">
      <h2 className="text-xl md:text-2xl lg:text-3xl title-text">
        Hear From Our Customers
      </h2>
      <hr class="w-1/2 flex flex-col self-center h-px mt-2 mb-4 bg-gray-300 border-0 dark:bg-gray-700" />
      <div className="flex justify-center">
        <div className="w-3/5">
          <Slider>
            <Card text={`Text from John.`} name={`John Doe`} />
            <Card text={`Text from Carly.`} name={`Carly Moore`} />
            <Card text={`Text from Sandy.`} name={`Sandy Cheeks`} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({ text, name }) => {
  return (
    <div className="text-center">
      <p>{text}</p>
      <p>{name}</p>
    </div>
  );
};

export default Testimonials;
