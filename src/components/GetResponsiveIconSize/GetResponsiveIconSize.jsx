const  getResponsiveIconSize = () => {
  if (typeof window === "undefined") return 25;
  return window.innerWidth >= 1124 ? 40 : 25;
};

export default getResponsiveIconSize