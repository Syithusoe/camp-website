import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex justify-between items-center z-30 py-5 mx-auto max-w-[1440px] px-6 lg:px-30 3xl:px-0">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} height={29} alt="Logo" />
      </Link>
      <ul className="lg:flex hidden gap-14 h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-normal pb-1.4 hover:font-bold transition-all cursor-pointer justify-center items-center"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flex justify-center items-center hidden">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}

export default Navbar;
