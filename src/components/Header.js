import React, { useContext, useEffect, useState } from "react";
// import context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
import ligoImg from "../img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-whit py-4 shadow-md' : 'bg-none py-6'} w-full fixed z-10 transition-all flex items-center text-center`}>
      <div className="container h-full  flex items-center justify-between mx-auto"> 
        <Link to={"/"}>
          <img className="w-10" src={ligoImg} alt="logo" />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative opacity-100"
        >
          <BsBag size={24} />
          <div className="bg-red-500 h-[20px] w-[20px] absolute -right-2 -bottom-2 text-[12px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
