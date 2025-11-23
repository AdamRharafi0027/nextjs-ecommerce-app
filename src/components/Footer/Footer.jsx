const Footer = () => {
  return (
    <footer className="w-full bg-[#646B5D] text-gray-300 py-10 mt-10 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              E-COMMERCE
            </span>
          </div>
          <p className="text-white text-sm max-w-xs">
            Your favorite online store — quality products at the best prices.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

          <div>
            <h3 className="text-white mb-3 font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Men</li>
              <li className="hover:text-white cursor-pointer">Women</li>
              <li className="hover:text-white cursor-pointer">Kids</li>
              <li className="hover:text-white cursor-pointer">Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-3 font-semibold">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-3 font-semibold">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-white">
        © {new Date().getFullYear()} ShopEase — All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
