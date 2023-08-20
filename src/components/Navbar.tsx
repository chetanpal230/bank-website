import React, { useState } from 'react';
import { logo,menu,close } from '../assets';
import { navLinks } from '../constants/index';

const Navbar: React.FC = () => {

  const [toggle,setToggle] = useState(false)

  return (
    <div>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt="Hoobank" className="W-[124px] h-[33px]" />
        <ul className='list-none sm:flex hidden items-center justify-end'>
          {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins cursor-pointer font-normal text-[16px] text-white
              ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
              <a className='hover:text-secondary' href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* For Mobile Devices */}

        <div className='sm:hidden flex flex-1 justify-end items-center'>

          <img
           src={toggle ? close : menu} 
           alt="Menu"
           className='w-[28px] h-[28px] cursor-pointer object-contain'
           onClick={() => setToggle((prev) => !prev)}
           />

           <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

           <ul className='list-none flex flex-col items-center justify-end flex-1'>
          {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white
              ${index === navLinks.length-1 ? 'mr-0' : 'mb-10'}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
           </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

