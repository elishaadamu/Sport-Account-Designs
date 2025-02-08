"use client";
// import Image from "next/image";
// import { SearchBar } from "@/src/components";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { BlogGrid } from "@/src/components";

// import Disike from "@/public/images/nutrition-blogs/dislike.svg";
// import Like from "@/public/images/nutrition-blogs/like.svg";
// import Audio from "@/public/images/nutrition-blogs/audio.svg";
// import Food1 from "@/public/images/nutrition-blogs/food1.png";
// import Wishlistbtn from "@/public/images/nutrition-blogs/wishlistbtn.svg";
// import { RxSection } from "react-icons/rx";

export default function BlogPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="w-full container mx-auto mt-4 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-sm">
      <section className="flex flex-col items-center gap-2 pt-5 mt-2 mb-5 text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
          Welcome to our blogs
        </h1>
        <p className="text-sm font-medium text-gray-600 sm:text-base">
          Daily new blogs, don`&apos;t miss them!
        </p>
      </section>
      <section className="w-full mt-4 flex items-center gap-8 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-sm">
        <div className="container mx-auto flex w-[80%] items-center justify-center p-2 border border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow text-sm text-gray-700 bg-gray-200 p-2 rounded-sm placeholder-gray-500 bg-transparent border border-none outline-none"
          />
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.387 5.387-1.41 1.41-5.387-5.387zM8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
          </svg>
        </div>

        <div className="relative w-[20%] text-center">
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-gray-400 rounded-full focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            View Category
          </button>

          {isOpen && (
            <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <Link
                href="/categories/all"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                All Categories
              </Link>
              <Link
                href="/categories/technology"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Technology
              </Link>
              <Link
                href="/categories/health"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Health
              </Link>
              <Link
                href="/categories/lifestyle"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Lifestyle
              </Link>
              <Link
                href="/categories/finance"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Finance
              </Link>
            </div>
          )}
        </div>
      </section>

      <BlogGrid />
    </main>
  );
}
