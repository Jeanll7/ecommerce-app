import React, { useContext } from 'react';
// import context
import { SidebarContext } from '../contexts/SidebarContext';
// import icons
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  return (
    <header className='bg-slate-100'>
      <div>Header</div>
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
