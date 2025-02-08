import Image from "next/image";
import Link from "next/link";

import Avatar from "@/public/images/logo.png";

export const Brand = () => {
  return (
    <Link
      passHref
      href="/"
      className="flex items-center cursor-pointer z-50 gap-2"
    >
      <div className="w-10 ">
        <Image src={Avatar} alt="logo" />
      </div>
      {/* <span className="hidden md:flex md:font-semibold text-sm text-primary">
        
      </span> */}
    </Link>
  );
};
