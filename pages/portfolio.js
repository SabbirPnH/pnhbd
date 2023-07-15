import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'aos/dist/aos.css';
import Head from 'next/head';


const Portfolio = () => {
  return (
    <div className='overflow-x-hidden scrollbar-thin'>

<Head>
<title>Portfolio</title>
</Head>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 md:py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div  data-aos="flip-up" data-aos-duration="1000"  className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image width={720} height={400} className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg" src="/port1.png" alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alifa Landmark</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <Link href='https://alifagroup.com/landmark/'><div className="flex items-center flex-wrap cursor-pointer ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Visit Now
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div></Link>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" data-aos-duration="1000"  className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image width={720} height={400} className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg" src="/port2.png" alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alifa Overseas</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <Link href='https://alifagroup.com/overseas/'><div className="flex items-center flex-wrap cursor-pointer ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Visit Now
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div></Link>
          </div>
        </div>
      </div>
      <div data-aos="flip-up" data-aos-duration="1000"  className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image width={720} height={400} className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg" src="/port3.png" alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Uddokta Group</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <Link href='http://uddoktagroupbd.com/'><div className="flex items-center flex-wrap cursor-pointer ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Visit Now
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Portfolio