import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/logo.jpg";
import { IoReorderFourSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Links = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Reviews", link: "/reviews" },
  { name: "Contact", link: "/contact" },
];

function Heder() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 768;
      setIsMobile(isMobileNow);
      if (!isMobileNow) setMenuOpen(false); // Close menu on desktop
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50">
      <header className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={img} className="w-10 h-10 rounded-full" alt="Logo" />
          <h1 className="text-2xl font-bold">
            <span className="text-red-500">D</span>arkft
          </h1>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="flex gap-10 text-lg font-medium">
            {Links.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className="hover:text-[#ff6f6f] transition duration-200"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        )}

        {/* Mobile Toggle Button or CTA */}
        <div className="flex items-center">
          {isMobile ? (
            isMenuOpen ? (
              <RxCross1
                className="text-3xl"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <IoReorderFourSharp
                className="text-3xl"
                onClick={() => setMenuOpen(true)}
              />
            )
          ) : (
            <button className="bg-[#80d66b] px-4 py-2 rounded-xl hover:bg-[#b7ff80] transition-all duration-300 shadow hover:scale-105">
              Shop Now
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="flex flex-col items-center gap-6 py-10 bg-white text-xl font-semibold shadow-md">
          {Links.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#ff6f6f] transition-colors duration-200"
            >
              {item.name}
            </NavLink>
          ))}
          <button className="bg-[#80d66b] px-4 py-2 rounded-xl hover:bg-[#b7ff80] transition-all duration-300 shadow hover:scale-105">
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Heder;
