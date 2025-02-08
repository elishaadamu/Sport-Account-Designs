"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { LinkItem } from "@/src/types";

const NavLinks = ({ item }: { item: LinkItem }) => {
  const pathname = usePathname();

  return (
    <div  className="">
      <Link
        className={` 'min-w-[100px] px-4 py-2 mx-1 hover:font-bold rounded-2xl font-normal text-sm text-center transition-all ease-in-out duration-200' ${
          pathname === item.href && "text-success bg- border rounded-2xl hover:bg-champanePink/40"
        } `}
        href={item.href}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default NavLinks;