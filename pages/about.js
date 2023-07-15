import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'


const About = () => {



  return (
    <div className='overflow-x-hidden scrollbar-thin'>

<Head>
<title>About PnH Corporation</title>
</Head>


<section className="text-gray-600 body-font bg-bg font-eng">
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div data-aos="flip-up" data-aos-duration="1500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0 ">
      <Image width={800} height={600} className="shadow-lg rounded" alt="hero" src="/ceo.png"/>
    </div>
    <div data-aos="fade-right" data-aos-duration="1000"  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="text-2xl font-medium title-font mb-2 text-darken">CEO MESSAGE</h1>
      <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher...</p>
    </div>
  </div>
</section>      

<section className="text-gray-600 body-font bg-bg">
  <div className="container px-5 py-5 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Bad design is more well-known to the general public than good design. Since it has to deal with lousy design every day, it has become conditioned to prefer it. The old is comforting while the new is scary. And we will provide the design what our client want and we also give that suggesstion what public will like.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ASFAKUL KABIR</h2>
      <p className="text-gray-500">Designer AND DEVELOPER</p>
    </div>
  </div>
</section>


    </div>
  )
}

export default About