"use client";

import { TextAlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import navLinks from "../../data/HeaderData";
import GetResponsiveIconSize from "../GetResponsiveIconSize/GetResponsiveIconSize";




const HeaderNavbar = () => {
  const [isMenuActivated, setIsMenuActivated] = useState(false);
  const [iconSize, setIconSize] = useState(25);

  useEffect(() => {
    const updateSize = () => {
      setIconSize(GetResponsiveIconSize());
    };

    updateSize(); // run on mount
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <nav>
      <div className="centred relative z-50">
        {isMenuActivated ? (
          <X
            size={iconSize}
            className="cursor-pointer"
            color="#646b5d"
            onClick={() => setIsMenuActivated(false)}
          />
        ) : (
          <TextAlignJustify
            size={iconSize}
            className="cursor-pointer"
            color="#646b5d"
            onClick={() => setIsMenuActivated(true)}
          />
        )}
      </div>

      {isMenuActivated && (
        <ul className="flex flex-col bg-white fixed left-0 top-0 h-screen w-50 lg:w-100 pl-10 lg:pl-20 pt-30 lg:pt-60 gap-15 lg:gap-20 z-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={link.className}
                onClick={() => setIsMenuActivated(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default HeaderNavbar;
