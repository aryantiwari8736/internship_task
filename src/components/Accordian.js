import React from "react";
import { useState } from "react";
const Accordian = (props) => {
  const [expand, setExpand] = useState(false);
  const toggle = () => {
    setExpand(!expand);
  };
  return (
    <div className="py-3 border-b-2 border-black">
      <div className="  text-[20px] font-semibold flex justify-between ">
        <div>{props.text}</div>
        <div onClick={toggle}>{expand ? "-" : "+"}</div>
      </div>
      <div className="text-[15px] my-4 text-dark_grey">
        {expand ? <div>{props.ans}</div> : <></>}
      </div>
    </div>
  );
};

export default Accordian;
