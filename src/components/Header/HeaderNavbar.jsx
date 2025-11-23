"use client"
import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import navLinks from "../../data/HeaderData";

export const responsiveIconSize = window.screen.width >= 1124 ? 40 : 25

const HeaderNavbar = () => {


      const [isMenuActivated, setIsMenuActivated] = useState(false);
  return (
    <>
      <nav>
        <div className="centred relative z-50">
          {isMenuActivated ? (
            <X size={responsiveIconSize} className="cursor-pointer" color="#646b5d" onClick={() => setIsMenuActivated(false)} />
          ) : (
            <TextAlignJustify className="cursor-pointer" size={responsiveIconSize}  color="#646b5d" onClick={() => setIsMenuActivated(true)} />
          )}
        </div>
        {isMenuActivated && (
          <ul className="flex flex-col bg-white fixed left-0 top-0 h-screen w-50 lg:w-100 pl-10 lg:pl-20 pt-30 lg:pt-60 gap-15 lg:gap-20 z-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link className={link.className} href={link.path} onClick={()=>setIsMenuActivated(false)}>
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
