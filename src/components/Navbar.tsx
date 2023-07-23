import React from 'react';
import Image from 'next/image';
import ChevronLeftSVG from '../statics/images/chevron-left.svg';
import SidebarSVG from '../statics/images/sidebar.svg'
import SettingsSVG from '../statics/images/settings.svg'
import { useDispatch, useSelector } from 'react-redux'; // Importamos useDispatch y useSelector
import { toggleSidebar } from '../store/sidebar.state'; // Impo


const Navbar = () => {

  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <nav className="bg-orange-500 py-5 px-8 flex items-center text-white">
      {/* Botón de "Atrás" */}
      <button className="flex border-[1.5px] items-center border-white rounded pl-3 pr-5 pt-2 pb-2 ">
        <Image
          src={ChevronLeftSVG}
          alt="Chevron Left"
          width={20}
          height={20}
        />
        Atrás
      </button>

      {/* Botón para esconder el Sidebar */}
      <button className="border-[1.5px] border-white rounded p-2 ml-4"  onClick={handleToggleSidebar}>
        <Image
          src={SidebarSVG}
          alt="Sidebar Icon"
          width={24}
          height={24}
        />
      </button>


      <button className="border-[1.5px] border-white rounded p-2 ml-auto">
        <Image
          src={SettingsSVG}
          alt="Settings Icon"
          width={24}
          height={24}
        />
      
      </button>
    </nav>
  );
};

export default Navbar;