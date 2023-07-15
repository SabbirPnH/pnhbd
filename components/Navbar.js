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
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [navbar, setNavbar] = useState(false);

    return (

        <nav className="overflow-x-hidden w-full bg-white sticky top-0 z-50 shadow-lg font-eng px-5 md:px-10 ">
            <div className="justify-between  mx-auto md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between py-3  md:block">
                        <div className='flex flex-row'><Link href={'/'}>
                            <Image className='cursor-pointer' src="/gif_logo.gif" width={60} height={45} alt="navimage"/>
                        </Link>
                    
                        </div>
                  

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
                            <Link href="/"><li className="cursor-pointer text-darken hover:text-[#32a6e0]"  onClick={() => setNavbar(!navbar)}>
                                <a>Home</a>
                            </li></Link>
                            <Link href="/portfolio"><li className="cursor-pointer text-darken hover:text-[#32a6e0]"  onClick={() => setNavbar(!navbar)}>
                                <a >Portfolio</a>
                            </li></Link>
                            <Link href="/about"><li className="cursor-pointer text-darken hover:text-[#32a6e0]"  onClick={() => setNavbar(!navbar)}>
                                <a >About US</a>
                            </li></Link>
                            <Link href="/contact"><li className="floating cursor-pointer bg-darken px-4 py-2 rounded-md text-white hover:text-orange-400"  onClick={() => setNavbar(!navbar)}>
                                <a >Contact US</a>
                            </li></Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='absolute top-6 md:top-5  flex justify-center right-[50%] left-[50%] lg:right-[50%] lg:left-[50%] md:left-[30%] md:right-[70%] item-center text-center '>
                <div className='flex flex-row justify-center md:justify-start md:ml-28 lg:justify-center lg:ml-0  md:mr-12 lg:mr-0 item-center text-center space-x-3 '>
                    <a href='https://www.facebook.com/pnhbd'><IoLogoFacebook className='text-2xl md:text-3xl text-[#0268e2]'/></a>
                    <a href='https://api.whatsapp.com/send?phone=8801914436613'><IoLogoWhatsapp className='text-2xl md:text-3xl text-[#43a736]'/></a>
                    <a href='#'><IoLogoYoutube className='text-2xl md:text-3xl text-red-600'/></a>
                    <a href='#'><IoLogoLinkedin className='text-2xl md:text-3xl text-darken'/></a>
                    </div>
                </div>
        

        </nav>
        

       
    )
}

export default Navbar