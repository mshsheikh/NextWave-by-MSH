"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <nav className="w-full bg-[#040d35]">
      <div className="max-w-[90%] w-full mx-auto flex items-center justify-between h-[70px]">
        <Image
          src="/nextwavebymsh.png"
          alt="NextWave by MSH"
          width={150}
          height={50}
          className="cursor-pointer"
        />

        <ul className="md:flex hidden items-center gap-4 text-white text-[12px] font-[600] tracking-widest">
          <li className="hover:text-[#0784ef] transition duration-100 cursor-pointer">
            <Link href={"/"} className="p-3">
              Home
            </Link>
          </li>
          <li className="hover:text-[#0784ef] transition duration-100 cursor-pointer">
            <Link href={"/blog"} className="p-3">
              Blogs
            </Link>
          </li>
          <li className="hover:text-[#0784ef] transition duration-100 cursor-pointer">
            <Link href={"/about"} className="p-3">
              About
            </Link>
          </li>
          <li className="hover:text-[#0784ef] transition duration-100 cursor-pointer">
            <Link href={"/contact"} className="p-3">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <div onClick={showNavHandler} className="w-7 cursor-pointer">
            <Bars3Icon className="text-white" />
          </div>
        </div>
      </div>

      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        onClick={closeNavHandler}
      ></div>

      <div
        className={`top-0 fixed ${navOpen} transform transition-all duration-500 flex justify-start flex-col h-screen w-[80%] pt-24 sm:w-[60%] bg-[#ffffff] z-[10000] space-y-6`}
      >
        <ul className="flex flex-col items-center gap-8 text-black/60 text-lg font-[600] tracking-widest">
          <li className="hover:text-black transition duration-100 cursor-pointer ">
            <Link onClick={closeNavHandler} className="p-3" href={"/"}>
              Home
            </Link>
          </li>
          <li className="hover:text-black transition duration-100 cursor-pointer ">
            <Link onClick={closeNavHandler} className="p-3" href={"/blog"}>
              Blogs
            </Link>
          </li>
          <li className="hover:text-black transition duration-100 cursor-pointer ">
            <Link onClick={closeNavHandler} className="p-3" href={"/about"}>
              About
            </Link>
          </li>
          <li className="hover:text-black transition duration-100 cursor-pointer ">
            <Link onClick={closeNavHandler} className="p-3" href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
        <CgClose
          onClick={closeNavHandler}
          className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
