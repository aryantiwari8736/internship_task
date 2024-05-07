import React, { useState } from "react";

import { Link } from "react-router-dom";
const Login = () => {
  const [btn_color, setBtnCol] = useState("grey");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputsFilled, setInputsFilled] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }

    if (name === "name" && value.trim() !== "" && email.trim() !== "") {
      setInputsFilled(true);
    } else if (
      name === "email" &&
      value.trim() !== "" &&
      name.trim() !== "" &&
      /^\S+@\S+\.\S+$/.test(email)
    ) {
      setInputsFilled(true);
    } else {
      setInputsFilled(false);
    }
  };
  return (
    <form className="">
      <div>
        <div className="text-center font-cover text-light_green text-[36px] mt-16">
          Registration Form
        </div>
        <div className="text-center font-manrope font-semibold md:text-[56px] text-[30px]">
          <div>Start your success </div>
          <div>Journey here!</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <input
            type="text"
            name="name"
            value={name}
            className="bg-grey rounded-full p-4 w-[300px] md:w-[417px]"
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            value={email}
            className="bg-grey rounded-full p-4 w-[300px] md:w-[417px]"
            onChange={handleInputChange}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="flex justify-center mt-14">
          {inputsFilled ? (
            <Link to="/submit">
              {" "}
              <button
                onClick={(e) => {
                  setBtnCol("bg_black");
                }}
                type="submit"
                className={` text-white w-[300px] md:w-[417px]  rounded-full py-4 bg-dark_grey hover:bg-bg_black`}
              >
                {" "}
                Submit{" "}
              </button>
            </Link>
          ) : (
            <button
              disabled={!inputsFilled}
              onClick={(e) => {
                setBtnCol("bg_black");
              }}
              type="submit"
              className={` text-white w-[300px] md:w-[417px]  rounded-full py-4 bg-dark_grey hover:bg-bg_black`}
            >
              {" "}
              Submit{" "}
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
