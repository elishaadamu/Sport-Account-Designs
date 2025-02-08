"use client";

import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Admin from "@/public/images/icons-yoga/admin.png";
import Notification from "@/public/images/workout_icons/minimal-notification.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="relative z-20 flex items-center gap-2">
          <button
            type="button"
            className="p-2.5 text-lg md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={190}
              height={60}
              className="hidden md:block"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`flex font-semibold text-slate-500 dark:text-white/70 lg:gap-1 ${
            navOpen ? "block" : "hidden"
          } md:flex`}
        >
          {[
            "calender-checked",
            "calender-date",
            "3d-folder",
            "realistic-upward",
            "3d-movie",
            "sports-gym",
          ].map((icon, index) => (
            <Link
              key={index}
              href="#"
              className="lg:py-1.5 py-2.5 px-3 duration-500"
            >
              <Image
                src={`/images/workout_icons/${icon}.png`}
                alt="icon"
                width={40}
                height={40}
              />
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex flex-row gap-4">
          <Link href="#" className="lg:py-1.5 py-2.5 px-3 duration-500">
            <Image
              src={Notification}
              alt="Notification"
              width={54}
              height={54}
            />
          </Link>
          <button className="flex items-center px-3 py-2 text-sm bg-white dark:text-white dark:bg-slate-700 rounded-md">
            <Image
              src={Admin}
              alt="Admin"
              width={37}
              height={37}
              className="rounded-full"
            />
            <span className="ml-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
              System Admin
            </span>
          </button>
        </div>

        {/* Dropdown Navigation */}
        <div className="relative z-[100]">
          {/* Dropdown Button */}
          <button
            className="font-bold px-3 text-lg bg-white dark:text-white dark:bg-slate-700 flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="ml-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold z-100">
              Navigations
            </span>
            <HiChevronDown
              className={`ml-2 text-lg duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg p-3 rounded-md w-40 z-[999] ">
              {["Nutrition", "Blog", "Workout", "Yoga", "Fruits"].map(
                (page, index) => (
                  <Link
                    key={index}
                    href={`/${page.toLowerCase()}`}
                    className="block py-2 px-4 hover:bg-gray-100 z-100"
                  >
                    {page} Page
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
