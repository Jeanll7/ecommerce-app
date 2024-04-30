import React, { useContext } from 'react';
// import context
import { SidebarContext } from '../contexts/SidebarContext';
// import icons
import { BsBag } from 'react-icons/bs';
import ligoImg from '../img/logo.svg'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  return (
    <header className='bg-slate-100 h-16 flex items-center text-center justify-between px-4'>
      <img
        className='w-10' 
        src={ligoImg} 
        alt='logo' 
      />
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className='cursor-pointer flex relative'
      >
        <BsBag size={24} />
      </div>
    </header>
  )
};

export default Header;
