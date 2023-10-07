"use client";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { links } from "../../datas/data";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const btnClick = () => {
    setOpen(!open);
  };
  return (
    <header
      className="z-[999] relative w-full"
      onMouseLeave={() => setOpen(false)}
    >
      <div className="fixed top-0 h-[4.5rem] w-full flex justify-between items-center border-b-2 border-b-inherit  bg-white bg-opacity-50">
        <a
          href="/"
          className="w-full ml-[2rem] sm:ml-[3rem]  text-xl font-black"
        >
          LEE DANBI Portfolio
        </a>
        <nav className="hidden md:block">
          <ul className="flex  mr-[1rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:flex-nowrap ">
            {links.map((nav, key) => (
              <li key={key}>
                <Link
                  href={nav.url}
                  className=" focus:bg-gray-100 focus:rounded-2xl focus:text-[1.1rem] hover:bg-gray-100 hover:rounded-2xl  hover:text-[1.1rem] cursor-pointer p-2 transition active:shadow-sm active:relative active:top-1"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative">
          <button
            onClick={btnClick}
            className=" flex justify-center items-center font-bold mr-[1rem] sm:mr-[2rem] md:hidden text-base border-2 p-[0.5rem] border-black cursor-pointer  hover:bg-black hover:border-gray-50 hover:text-white active:shadow-sm active:relative active:top-1"
          >
            List
          </button>
          {open === true ? (
            <div className=" absolute border-2 w-[6rem] right-2 top-12 bg-white bg-opacity-60 rounded-xl">
              <ul>
                {links.map((nav, key) => (
                  <li
                    key={key}
                    className=" w-full text-center
                    active:shadow-sm active:relative active:top-1 p-1"
                  >
                    <Link
                      className="text-base hover:text-lg hover:text-bold"
                      href={nav.url}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;

const Container = tw.div`
 
`;
