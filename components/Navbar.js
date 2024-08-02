import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'
import { useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image';
import { HiOutlineMenuAlt3 } from 'react-icons/Hi';
import {IoLogoFacebook, IoLogoYoutube, IoLogoLinkedin, IoLogoWhatsapp} from 'react-icons/Io'
import { MdClose } from 'react-icons/Md';
import data from './Data';
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

const iconColors = ['#3b5998', '#25D366','#E72929' , '#FF0000', '#FFA500'];
const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [navbar, setNavbar] = useState(false);
    const [menus, setMenus] = useState([]);
    const [social,setSocial]=useState([])
    const [itservice,setItService]=useState([])
   
    // social-link data
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
// It Service
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://www.admin.pnhbd.com/api/website-settings-info');
            const data = await response.json();
            setItService(data); // Update state with fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
      // navbar menu data
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
   
    return (

        <nav className="overflow-x-hidden w-full bg-white sticky top-0 z-50 shadow-lg font-eng px-5 md:px-10 ">
            <div className="justify-between  mx-auto md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between py-3  md:block">
                       {
                            itservice.map((itLogo,id)=>(
                                <div key={id}  className='flex flex-row'>
                                <Link href={itLogo.logo_link}>
                                    <Image className='cursor-pointer' src={itLogo.fav_icon} width={60} height={45} alt="navimage"/>
                                </Link>
                                </div>
                                ))
                       }
                  
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >


                                {/* 3 line */}

                                {navbar ? (
                                    <MdClose className='text-3xl text-darken' />
                                ) : (
                                    <HiOutlineMenuAlt3 className='text-3xl text-darken' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                            {menus.map(menu => (
                                <li key={menu.menu_name} className={menu.menu_name === 'Contact US' ? "floating  cursor-pointer bg-darken px-4 py-2 rounded-md text-white hover:text-orange-400" : "cursor-pointer text-darken hover:text-[#32a6e0]"} onClick={() => setNavbar(!navbar)}>
                                    <Link href={menu.url}><a>{menu.menu_name}</a></Link>
                                </li>
                            ))}   
                        </ul>
                    </div>
                </div>
            </div>

            <div className='absolute top-6 md:top-5  flex justify-center right-[50%] left-[50%] lg:right-[50%] lg:left-[50%] md:left-[30%] md:right-[70%] item-center text-center '>
                <div className='flex flex-row justify-center md:justify-start md:ml-28 lg:justify-center lg:ml-0  md:mr-12 lg:mr-0 item-center text-center space-x-3 '>   
                {social.map((icon, id) => (
                  <a key={id} href={icon.link} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', width: '24px', height: '24px' }}>
                    <Image src={icon.svg} alt="icon img" layout="fill" objectFit="contain" />
                  </a>
                ))}
       
                    </div>
                </div>
        </nav>
         
    )
}

export default Navbar