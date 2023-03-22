import React from "react";
import { Link } from "react-router-dom";
import PHTLogo from "../assets/PHT_LOGO_BLUE.png";
import PHTTitle from "../assets/PHT_TITLE_BLUE(2).png";

function Logo() {
  return (
    <div className="w-full flex flex-col items-center mb-6">
      <div className="w-1/3 mt-5 flex">
        <Link to="/" target="blank">
          <img src={PHTTitle} alt="Phoenix Health Technology"></img>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
