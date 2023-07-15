import React from 'react'
import Head from 'next/head'



const Contact = () => {
  return (
  <div className='bg-bg font-eng overflow-x-hidden scrollbar-thin'>

<Head>
<title>Contact Us</title>
</Head>

<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-8 md:py-14 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?q=razia%20plza&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
      <div className="floating-4 bg-white relative flex flex-wrap py-6 rounded shadow-2xl">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-darken tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">184, Razia Plaza, Senpara Parbata. Mirpur-10, Dhaka-1216, Bangladesh</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-darken tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">info@pnhbd.com</a>
          <h2 className="title-font font-semibold text-darken tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">(+880)1873-003333</p>
        </div>
      </div>
    </div>

    
    <div className="bg-bg lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <form action="https://formspree.io/f/mpznpzdo" method="post">

      <h2 className="text-darken text-lg mb-1 font-semibold title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Feel free to Contact us and share your opinion.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input required type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Mobile Number</label>
        <input required type="number" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-darken border-0 py-2 px-6 focus:outline-none hover:bg-light rounded text-lg">Send Message</button>

      </form>
    </div>
  </div>
</section>

  </div>
  )
}

export default Contact