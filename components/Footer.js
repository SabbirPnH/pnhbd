import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from './Data'

const Footer = () => {
  return (
    <div className='bg-[#101218]'>
        <footer className="text-white bg-[#101218] body-font font-eng">
  <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link href={'/'}><a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image width={130} height={100} src="/gif_logo.gif" alt="" />
      </a></Link>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="md:w-1/2 w-full px-4">
        <h2 className="title-font text-orange-400 tracking-widest font-bold text-sm mb-3">Useful Links</h2>
        <nav className="list-none mb-10">
          <li>
            <a href={data.urls.it}  className="text-white hover:text-[#4abdff]">PnH IT Solution</a>
          </li>
          {/* <li>
            <a href={data.urls.consultancy}  className="text-white hover:text-[#4abdff]">PnH Overseas</a>
          </li>
          <li>
            <a  href={data.urls.study} className="text-white hover:text-[#4abdff]">Study Abroad Consultation</a>
          </li> */}
          <li>
            <a href={'http://pnhdns.com'}  className="text-white hover:text-[#4abdff]">PnH eCom</a>
          </li>
          <li>
            <a href={'http://webhost.pnhdns.com'}  className="text-white hover:text-[#4abdff]">PnH WebHost</a>
          </li>
          <li>
            <a href={'http://school.pnhdns.com'}  className="text-white hover:text-[#4abdff]">PnH eSchool</a>
          </li>
          <li>
            <a href={data.urls.shop}  className="text-white hover:text-[#4abdff]">Easy Sale Bd</a>
          </li>
        </nav>
      </div>
      <div className=" md:w-1/2 w-full px-4">
        <h2 className="title-font  text-orange-400 tracking-widest font-bold text-sm mb-3">Get In Touch</h2>
        <nav className="list-none mb-10">
          <li>
            <a href={data.settings.addressLink} className="text-white hover:text-[#4abdff]">{data.settings.address}</a>
          </li>
          <li>
            <a href={data.settings.mobileLink} className="text-white hover:text-[#4abdff]">Call: {data.settings.mobile}</a>
          </li>
          <li>
            <a href={data.settings.emailLink} className="text-white hover:text-[#4abdff]">{data.settings.email}</a>
          </li>
          <li>
            <a href={data.settings.emailLink2} className="text-white hover:text-[#4abdff]">{data.settings.email2}</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-[#101218]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-[#4abdff] text-sm text-center sm:text-left">© 2019-2023 PnH Corporation —
        <a href={data.urls.it} rel="noopener noreferrer" className="text-white ml-1" target="_blank">@PnH It Solution</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href={data.social.facebook} className="text-[#4abdff]">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href={data.social.twitter} className="ml-3 text-[#4abdff]">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href={data.social.instagram} className="ml-3 text-[#4abdff]">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href={data.social.linkedin} className="ml-3 text-[#4abdff]">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer