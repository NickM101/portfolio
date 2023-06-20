import Layout from "./Layout";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-dark dark:text-light dark:border-light font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
          <Link href="/" className="underline underline-offset-2"> Nick Munene</Link>
        </div>
        <Link href="/" target="_blank" className="underline underline-offset-2">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
