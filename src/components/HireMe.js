import { CircularText } from "./Icons";
import Link from "next/link";
import React from "react";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-normal relative">
        <CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
        <Link
          href={"mailto:nickmunene101@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow border-solid border-dark w-20 h-20 rounded-full font-semibold hover:text-dark hover:bg-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
