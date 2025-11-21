"use client"
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import navLinks from "./HeaderData";

const HeaderNavbar = () => {
      const [isMenuActivated, setIsMenuActivated] = useState(false);
  return (
    <>
      <nav>
        <div className="centred">
          {isMenuActivated ? (
            <X onClick={() => setIsMenuActivated(false)} />
          ) : (
            <TextAlignJustify onClick={() => setIsMenuActivated(true)} />
          )}
        </div>
        {isMenuActivated && (
          <ul className="flex flex-col bg-white fixed left-0 top-16 h-screen w-50 pl-10 pt-20 gap-15">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link className={link.className} href={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default HeaderNavbar;
