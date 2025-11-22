"use client"
import { CircleUser, Handbag, Heart } from "lucide-react";
import CounterLayout from "../ui/CounterLayout";
import HeaderNavbar, { responsiveIconSize } from "./HeaderNavbar";
import { useEffect, useState } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`sticky backdrop-blur-md  w-full flex items-center px-5 lg:px-70 h-15 lg:h-25 justify-between py-5 top-0 z-50 duration-200 transition-all
    ${scrolled ? "backdrop-blur-md bg-white/70 shadow-md" : "bg-transparent"}`}>
      <HeaderNavbar />
      <h1 className="text-[20px] lg:text-4xl ml-3 lg:ml-30 font-bold playfair_font text-[#646b5d] ">
        E-COMMERCE
      </h1>
      <div className="centred gap-2 lg:gap-10 text-[#646b5d]">
        <CounterLayout>
          <Heart size={responsiveIconSize} />
        </CounterLayout>
        <CounterLayout>
          <Handbag size={responsiveIconSize} />
        </CounterLayout>
        <CircleUser size={responsiveIconSize} />
      </div>
    </header>
  );
};

export default Header;
