import { CircleUser, Handbag, Heart } from "lucide-react";
import CounterLayout from "../ui/CounterLayout";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  return (
    <header className="sticky backdrop-blur-md bg-white/70 shadow-md w-full flex items-center px-5 h-15 justify-between py-5 top-0">
      <HeaderNavbar />
      <h1 className="ml-3 font-bold playfair_font text-[#646b5d]">
        E-COMMERCE
      </h1>
      <div className="centred gap-2 text-[#646b5d]">
        <CounterLayout>
          <Heart />
        </CounterLayout>
        <CounterLayout>
          <Handbag />
        </CounterLayout>
        <CircleUser />
      </div>
    </header>
  );
};

export default Header;
