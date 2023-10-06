"use client";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { links } from "../datas/data";

const Header = () => {
  return (
    <header className="z-[999] relative w-full">
      <div className="fixed top-0 h-[4.5rem] w-full flex justify-between items-center border-b-2 border-b-inherit  bg-white bg-opacity-50">
        <a
          href="/"
          className="w-screen flex justify-center sm:ml-[3rem]  text-xl font-black"
        >
          LEE DANBI Portfolio
        </a>
        <nav className="hidden md:block">
          <ul className="flex  mr-[1rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:flex-nowrap ">
            {links.map((nav, key) => (
              <li key={key}>
                <Link
                  href={nav.url}
                  className=" focus:bg-gray-100 focus:rounded-2xl focus:text-[1.1rem] hover:bg-gray-100 hover:rounded-2xl  hover:text-[1.1rem] cursor-pointer active:bg-gray-300 active:text-[1rem] p-2 transition"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="btn btn-error hidden sm:flex sm:mr-[2rem] md:hidden">
          dd
        </div>
      </div>
    </header>
  );
};

export default Header;

const Container = tw.div`
 
`;
