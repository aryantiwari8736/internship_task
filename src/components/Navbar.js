import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" shadow-md mx-6 my-4 rounded-full px-3 py-4">
      <div className="flex justify-center md:flex md:justify-between mx-4 my-4">
        <Link to="/">
          {" "}
          <img src="Vector.png" alt="header_img" />
        </Link>
        <div className="hidden md:block">
          <Link to="/login">
            {" "}
            <button className=" hover:bg-dark_grey hover:text-white border px-4 py-3 mx-2 rounded-3xl ">
              Get Projects
            </button>
          </Link>
          <button className=" hover:bg-black_hover_color hover:text-white border px-4 py-3 rounded-3xl  bg-bg_black text-white ">
            Onboard Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
