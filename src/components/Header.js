import React, { useContext } from 'react';
// import context
import { SidebarContext } from '../contexts/SidebarContext';
// import icons
import { BsBag } from 'react-icons/bs';
import ligoImg from '../img/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  return (
    <header className='bg-slate-100 h-16 flex items-center text-center px-4'>
      <nav className='w-full max-w-7xl flex items-center justify-between mx-auto'>
      <Link to="/">
        <img
          className='w-10' 
          src={ligoImg} 
          alt='logo' 
        />
      </Link>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className='cursor-pointer flex relative'
      >
        <BsBag size={24} />
      </div>
      </nav>
    </header>
  )
};

export default Header;
