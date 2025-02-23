

import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [menu,setMenus]=useState([])
  const [social,setSocial]=useState([])
  console.log(menu)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/menus`);
        const data = await response.json();
        setMenus(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/website-settings-social');
        const data = await response.json();
        setSocial(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-3 ">
      <div className="flex items-center justify-between container mx-auto">
        <Link href='/'>
        <Image className='cursor-pointer' src="/gif_logo.gif" width={60} height={45} alt="navimage"/>
    </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-lg text-[#424242]">
         {
            menu.map((name)=>(
              <Link key={name.id} href={name.url}>
                <li  className="cursor-pointer text-darken hover:text-[#32a6e0] transition-all ">
               {name.menu_name}
              </li>
              </Link>
            ))
         }
          {/* Dropdown Menu for Services */}
          <li class='group max-lg:border-b max-lg:py-3 relative'>
              <a href='javascript:void(0)'
                class='cursor-pointer text-darken hover:text-[#32a6e0]  block'>Career<svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"

                    data-name="16" data-original="#000000" />
                </svg>
              </a>
              <ul
                class='absolute  bg-white space-y-3   max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <Link href="/job">
                <li class='border-b py-2 '><button 
                  class='cursor-pointer text-darken hover:text-[#32a6e0] block'>Apply Job</button></li>
                </Link>
                <Link href="/available-job">
               <li class='border-b py-2 '><button href='javascript:void(0)'
                  class='cursor-pointer text-darken hover:text-[#32a6e0] block'>Available Job</button></li>
               </Link>
             
              </ul>
            </li>
         
        </ul>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
        
          {
            social.map((icon)=>(
             <Link key={icon.id} href={icon.link} rel="noopener noreferrer" target="_blank">
              <Image className="text-[1.6rem] text-[#424242] cursor-pointer text-darken hover:text-[#32a6e0] transition-all duration-500 w-10 h-10"  src={icon.svg} alt=" icon-img" width={24} height={24}/>
             </Link>
        
            ))
          }
          {/* Mobile Menu Button */}
          <CiMenuFries
            className="text-[1.6rem] text-[#424242] cursor-pointer md:hidden"
            onClick={() => setMobileSidebarOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[75%] bg-white  p-5 transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-4">
        <Link href='/'>
        <Image className='cursor-pointer' src="/gif_logo.gif" width={60} height={45} alt="navimage"/>
    </Link>
          <MdClose
            className="text-2xl cursor-pointer"
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>

        {/* Sidebar Menu Items */}
        <ul className="flex flex-col gap-4 text-gray-700">
        {
            menu.map((name)=>(
                <Link key={name.id} href={name.url}>
                <li  onClick={() => setMobileSidebarOpen(false)} className="cursor-pointer text-darken border-b pb-1 sm:pb-0 sm:border-none hover:text-[#32a6e0] transition-all ">
               {name.menu_name}
              </li>
              </Link>
            
            ))
         }
          {/* Dropdown for Mobile */}
          <li class='group max-lg:border-b  max-lg:py-3 relative'>
              <a href='javascript:void(0)'
                class='cursor-pointer text-darken hover:text-[#32a6e0] lg:hover:fill-[#007bff] block'>Career<svg
                  xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000" />
                </svg>
              </a>
              <ul
                class='absolute  bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                 <Link href="/job">
                <li  onClick={() => setMobileSidebarOpen(false)} class='border-b py-2 '><button 
                  class='cursor-pointer text-darken hover:text-[#32a6e0] block'>Apply Job</button></li>
                </Link>
               <Link href="/available-job">
               <li  onClick={() => setMobileSidebarOpen(false)} class='border-b py-2 '><button href='javascript:void(0)'
                  class='cursor-pointer text-darken hover:text-[#32a6e0] block'>Available Job</button></li>
               </Link>
               
              </ul>
            </li>
         
        </ul>
      </aside>

      {/* Overlay (closes sidebar on click) */}
      {mobileSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;


