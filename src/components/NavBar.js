import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      viewBox="0 0 512 512"
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative">
     
     <button className="flex flex-col justify-center items-center">
      <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5"></span>
      <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm " ></span>
      <span className="bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5"></span>
     </button>
     
     
      <nav>
        <CustomLink href={"/"} title={"Home"} className="mr-4" />
        <CustomLink href={"/about"} title={"About"} className="mx-4" />
        <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
        {/* <CustomLink href={"/contact"} title={"Contact Me"} className="ml-4" /> */}
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
          href="https://github.com/NickM101"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
          href="https://twitter.com/nick__nesh"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
          href="https://www.linkedin.com/in/nickmunene101/"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
