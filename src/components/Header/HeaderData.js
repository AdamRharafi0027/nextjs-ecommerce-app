const navLinksClassName =
  "font-bold inter_font text-[#646b5d] text-[20px] hover:text-[#a7b3a2] transition-all duration-100";

const navLinks = [
  { title: "Home", path: "/", className: navLinksClassName },
  { title: "Shop", path: "/products_page", className: navLinksClassName },
  { title: "Favorites", path: "/favorites_page", className: navLinksClassName },
  { title: "About Us", path: "/about_page", className: navLinksClassName },
  {
    title: "Our Services",
    path: "/services_page",
    className: navLinksClassName,
  },
];

export default navLinks