import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/logo.jpg";
import { IoReorderFourSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
function Heder() {
  useEffect(() => {
    function handelMobile() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenu(false)
      }
    }
    handelMobile();

    window.addEventListener("resize", handelMobile);

    return () => {
      window.removeEventListener("resize", handelMobile);
    };
  }, []);

  const handelMenu = () => {
    if ((isMenu == false)) {
      setMenu(true);
    }else{
      setMenu(false)
      
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setMenu] = useState(false);
  console.log(isMobile);

  return (
    <div className="min-w-screen bg-white  md:text-lg font-medium text-black h-15 lg:text-xl fixed z-50 gap-10 flex justify-between shadow-md ">
      <header className="flex justify-between w-full items-center lg:mr-20 lg:ml-20 mr-5 ml-5 py-4">
        {/* Logo */}
        <div className=" flex justify-center items-center gap-2   transition-colors duration-300 cursor-pointer">
          <div className="w-10 h-10">
            <img
              src={img}
              className="w-10 h-10 rounded-full"
              alt="image.jpg"
            ></img>
          </div>
          <div className="text-2xl font-bold">
            <h1>
              <span className="text-red-500 ">D</span>arkft
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex gap-20 transition  duration-300 ease-in-out ${
            isMenu
              ? "flex-col w-screen h-[100vh] text-3xl  items-center transition-all  duration-300 ease-in-out bg-white absolute top-15 pt-30  "
              : "transition-all  duration-300 ease-in-out"
          }`}
        >
          {Links.map((items) => {
            return (
              <NavLink
                key={items.name}
                className={`hover:text-[#ff6f6f]  transition-all  duration-300 ease-in-out ${
                  isMobile
                    ? isMenu
                      ? "block"
                      : " visibility: hidden "
                    : "block"
                } transition-all duration-600 ease-out `}
              >
                {items.name}
              </NavLink>
            );
          })}
        </div>

        {/* Shop Now Button */}
        <div>
          {isMobile ? (
            isMenu ? (
              <RxCross1 className="text-3xl" onClick={handelMenu} />
            ) : (
              <IoReorderFourSharp className="text-3xl" onClick={handelMenu} />
            )
          ) : (
            <button className="bg-[#80d66b] w-30 h-10 rounded-xl hover:bg-[#b7ff80] transition-all duration-300 shadow hover:scale-105">
              Shop Now
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Heder;
