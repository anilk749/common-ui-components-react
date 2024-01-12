/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-2xl mx-auto bg-gray-200 text-slate-900 p-0 mt-2 text-lg font-medium rounded-md cursor-pointer">
      <button
        className={`w-full flex justify-between items-center p-4 ${isOpen && 'bg-slate-400 rounded-t-md'} `}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{title}</span>
        {/* <span>{isOpen ? "-" : "+"}</span> */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-300 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-300 ease-out ${
              isOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`max-w-2xl mx-auto text-slate-700 text-base grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100 p-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden">{content}</p>
      </div>
    </div>
  );
};

export default Accordian;
