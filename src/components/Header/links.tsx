import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import NavLinks from "./navlinks";
import { CloseMenu, MenuFill } from "../../icons";

const Links = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const session = true; // Temporary
  const isAdmin = true; // Temporary

  return (
    <div className="">
      <ul className="hidden md:flex">
        {siteConfig.navItems.map((nav) => (
          <>
          <li key={nav.label} className="uppercase hover:text-xl">
            <NavLinks item={nav} />
          </li>
          </>
        
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ label: "Admin", href: "/admin" }} />}
            <button className="px-2 font-medium uppercase">
              <NavLinks item={{ label: 'Logout', href: 'logout' }} />
            </button>
          </>
        ) : (
          <NavLinks item={{ label: "Login", href: "/login" }} />
        )}
      </ul>

      <button
        className="block md:hidden z-[100] w-[42px] h-[42px] border rounded-lg shadow-xl transition-all ease-in-out duration-300"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        <div className="cursor-pointer">
          <div className="relative">
            {open ? (
              <CloseMenu className="w-10 h-10" />
            ) : (
              <MenuFill className="w-10 h-10" />
            )}
          </div>
        </div>
      </button>
      
      {open && (
        <div
          className="
            md:hidden absolute flex flex-col pl-10 pt-9
            rounded-s-lg items-start w-1/2 right-0 h-screen
            bg-gray-400 leading-10 z-[1000]
          "
        >
          {siteConfig.navItems.map((mobile) => (
            <NavLinks item={mobile} key={mobile.label} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ label: "Admin", href: "/admin" }} />
              )}
              <button className="px-2 font-medium uppercase">Logout</button>
            </>
          ) : (
            <NavLinks item={{ label: "Login", href: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;