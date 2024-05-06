import React from "react";

const Footer = () => {
  return (
    <div className="bg-normal_grey font-manrope md:flex md:flex-row flex flex-col justify-between rounded-3xl mx-4 my-12 px-6 py-16">
      <div className="text-center text-[18px] font-semibold">
        Talup 2023. All rights reserved
      </div>
      <div className="text-center md:flex gap-3 font-semibold">
        <div>Terms&Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
