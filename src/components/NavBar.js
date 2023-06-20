import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {motion} from "framer-motion";

import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const CustomLink = ({href, title, className = ""}) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      viewBox="0 0 512 512"
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({href, title, className = "", toggle}) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45  translate-y-1" : " -translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
          {/* <CustomLink href={"/contact"} title={"Contact Me"} className="ml-4" /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className="w-6 mr-3"
            href="https://github.com/NickM101"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className="w-6 mx-3"
            href="https://twitter.com/nick__nesh"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            whileHover={{y: -2}}
            whileTap={{scale: 0.9}}
            className="w-6 ml-3"
            href="https://www.linkedin.com/in/nickmunene101/"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
        initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
        animate={{scale: 1, opacity: 1}}
        className="min-w-[70vw] flex flex-col justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 sm:py-14">
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              toggle={handleClick}
              href={"/"}
              title={"Home"}
              
            />
            <CustomMobileLink
              toggle={handleClick}
              href={"/about"}
              title={"About"}
             
            />
            <CustomMobileLink
              toggle={handleClick}
              href={"/projects"}
              title={"Projects"}
              
            />
            {/* <CustomLink href={"/contact"} title={"Contact Me"} className="ml-4" /> */}
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              target={"_blank"}
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
              className="w-6 mr-3 "
              href="https://github.com/NickM101"
            >
              <GithubIcon className={'bg-light rounded-full dark:bg-dark'} />
            </motion.a>
            <motion.a
              target={"_blank"}
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
              className="w-6 mx-3"
              href="https://twitter.com/nick__nesh"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
              className="w-6 ml-3"
              href="https://www.linkedin.com/in/nickmunene101/"
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
