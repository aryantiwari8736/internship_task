import React, { useEffect } from "react";

const Submit = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, []);
  return (
    <div className="flex flex-col items-center gap-2 h-[90vh] justify-around">
      <div className="flex flex-col items-center">
        {" "}
        <div className="">
          <img src="Vector (1).png" alt="submit_icon" />
        </div>
        <div className="text-light_green font-cover text-[36px] mt-4">
          Success Submitted
        </div>
        <div className="font-manrope text-[30px] md:text-[56px] font-semibold">
          Congratulations
        </div>
        <div className="font-manrope   text-[27px]  md:w-[718px] text-center text-dark_grey mx-3">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
      </div>
      <div className=" mx-2 text-26px font-manrope text-dark_grey text-center">
        Redirecting you to Homepage in{" "}
        <span className="text-bg_black font-semibold">5 Seconds</span>
      </div>
    </div>
  );
};

export default Submit;
