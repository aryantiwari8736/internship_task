import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" border-[#EAEAEA] border-[1px] mx-6 my-6 rounded-full px-3 py-[10px]">
      <div className="flex items-center justify-center md:flex md:justify-between mx-4 my-4">
        <Link to="/">
          {" "}
          <img src="Vector.png" alt="header_img" />
        </Link>
        <div className="hidden md:block">
          <Link to="/login">
            {" "}
            <button className=" border-[#EAEAEA] hover:bg-dark_grey hover:text-white border w-[189.56px] h-[77.22px] mx-2 rounded-full ">
              Get Projects
            </button>
          </Link>
          <button className=" hover:bg-black_hover_color hover:text-white border w-[189.56px] h-[77.22px] rounded-full  bg-bg_black text-white ">
            Onboard Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
