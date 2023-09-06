import AOS from 'aos';
import Head from 'next/head';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import data from "../components/Data";


// https://preview.themeforest.net/item/zoric-responsive-landing-page-template/full_screen_preview/34475028?_ga=2.84303965.594075311.1661176597-1708436370.1658760624



export default function Home() {

  const urls = data.urls;

  // slider
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  // slider2
  var settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 1000,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };


  // client message
  const msg = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };


  return (
    <div className='overflow-x-hidden scrollbar-thin' >

      <Head>
        <title>PnH Corporation</title>
      </Head>

      {/* landing page */}
      <section className=" w-full text-gray-600 body-font font-eng bg-gradient-to-t from-[#03326e] to-[#076295] ...">
        <div className="container mx-auto flex px-5 pt-8 pb-20 md:pt-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
            <h1 data-aos="fade-right" data-aos-duration="500" className="title-font text-5xl md:text-6xl mb-4 font-semibold text-orange-400">PnH <span className='text-white font-medium'> Corporation</span>
            </h1>
            <p className="mb-4 leading-relaxed text-white"><a href={urls.it}>IT Solution</a> | <a href={urls.shop}>Online Shop</a> </p>
            <div className="flex justify-center">
              <Link href={'/about'}><button data-aos="fade-right" data-aos-duration="500" className="floating-4 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg  hover:scale-[1.1] duration-300 ...">Explore Us</button></Link>
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="3000" className="floating lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <Slider {...settings}>
              <div>
                <Image className='rounded-md' width={720} height={600} src="/s1.png" alt="" />
              </div>
              {/* <div>
                <Image className='rounded-md' width={720} height={600} src="/s2.png" alt="" />
              </div>
              <div>
                <Image className='rounded-md' width={720} height={600} src="/s3.png" alt="" />
              </div> */}
              <div>
                <Image className='rounded-md' width={720} height={600} src="/s4.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* shape devider */}

      {/* <div className="relative w-full h-20 -mt-8 md:-mt-24">
   <Image layout='fill' src="/divider.svg" alt="" />
</div> */}



      {/* sister concern */}
      <section className=" text-gray-600 body-font pb-16 mt-[15.2px]  bg-bg font-eng ">
        <div className="container px-5 py-0 mx-auto ">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div data-aos="flip-left" data-aos-duration="500" className="p-4 md:w-1/3 sm:w-1/2 w-full  md:-mt-16">
              <Link href={urls.it} target='_blank'><div className="cursor-pointer shadow-xl bg-it bg-cover bg-center  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
                <Image src="/computer.gif" alt="computer" width={50} height={50} />
                <h2 className="title-font font-medium text-2xl text-red-500 hover:text-gray-900 duration-500">PnH It Solution</h2>
                <p className="leading-relaxed text-light">Design and Develop</p>
              </div></Link>
            </div>
            {/* <div data-aos="flip-left" data-aos-duration="500" className="p-4 md:w-1/4 sm:w-1/2 w-full md:-mt-16">
              <Link href={urls.consultancy}><div className="cursor-pointer shadow-xl bg-overseas bg-cover bg-center  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
                <Image src="/travel.gif" alt="travel" width={50} height={50} />
                <h2 className="title-font font-medium text-2xl text-red-500 hover:text-gray-900 duration-500">PnH Overseas</h2>
                <p className="leading-relaxed text-light">Tour and Travels</p>
              </div></Link>
            </div>
            <div data-aos="flip-left" data-aos-duration="500" className="p-4 md:w-1/4 sm:w-1/2 w-full md:-mt-16">
              <Link href={urls.study}><div className="cursor-pointer shadow-xl bg-study bg-cover bg-center px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
                <Image src="/book.gif" alt="book" width={50} height={50} />
                <h2 className="title-font font-medium text-2xl text-red-500 hover:text-gray-900 duration-500">Study </h2>
                <p className="leading-relaxed text-light">Study Abroad Consultation</p>
              </div></Link>
            </div> */}
            <div data-aos="flip-left" data-aos-duration="500" className="p-4 md:w-1/3 sm:w-1/2 w-full md:-mt-16">
              <Link href={urls.shop}><div className="cursor-pointer shadow-xl bg-shop bg-cover bg-center  px-4 py-6 rounded-lg hover:scale-[1.1] duration-1000 ">
                <Image src="/cart.gif" alt="cart" width={50} height={50} />
                <h2 className="title-font font-medium text-2xl text-red-500 hover:text-gray-900 duration-500">Online Shop</h2>
                <p className="leading-relaxed text-light">E-commerce</p>
              </div></Link>
            </div>
          </div>
        </div>
      </section>


      {/* about us */}
      <section className="text-gray-600 body-font font-eng bg-bg">
        <div className="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center">
          <div data-aos="flip-left" data-aos-duration="500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-2 md:mb-0">
            <Image width={600} height={600} className="floating object-cover object-center rounded" alt="hero" src="/about.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-darken">About Us
            </h1>
            <p className="mb-2 md:mb-8 leading-relaxed text-justify">PnH Corporation started its operation from 2019 at Mirpur, Dhaka but acquired the trade license from Bangladesh govt. in 2020. Since its inception PnH has worked to ensure a stable position in the ICT market of domestic & international area. We serve instant result oriented Digital Marketing Services, Dynamic Software and Hardware solutions across a wide range of industries and qualifications..... </p>
            <div className="flex justify-center">
              <Link href={'/about'}><button className="flex mx-auto mb-8 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">Read More</button></Link>
            </div>
          </div>
        </div>
      </section>



      {/* It serivces  */}

      <section className=" text-gray-600 body-font font-eng bg-white">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <h2 className="text-2xl text-darken tracking-widest font-semibold mb-1">PnH IT Solution</h2>
            <h1 className=" text-xl font-medium title-font mb-4 text-orange-500">We do all Creative Services</h1>
            <Image data-aos="zoom-in" data-aos-duration="500" width={4} height={2} src="/line.svg" alt="" />
            <p className="md:w-1/2 mt-4 mx-auto text-center leading-relaxed text-sm">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value.</p>
          </div>
          <div className="flex flex-wrap">
            <div data-aos="flip-left" data-aos-duration="1500" className="lg:w-1/2 md:w-full px-8 py-4 items-center text-center">
              <Image width={50} height={50} src="/web.gif" alt="web" />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Web Development</h2>
              <p className="leading-relaxed text-base text-justify mb-4">Web development has come a long way since its inception, continually evolving to meet the growing demands of users and businesses. From simple static websites to complex web applications, the field has witnessed remarkable advancements in both design and functionality. </p>
            </div>
            <div data-aos="flip-left" data-aos-duration="1500" className="lg:w-1/2 md:w-full px-8 py-4 text-center">
              <Image width={50} height={50} src="/graphics.gif" alt="graphics" />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Graphics Design</h2>
              <p className="leading-relaxed text-base text-justify mb-4">Graphic design is an art form that merges creativity, technology, and visual communication to convey powerful messages and captivate audiences. It plays a fundamental role in various industries, ranging from advertising and marketing to web design and publishing. </p>
            </div>
            <div data-aos="flip-right" data-aos-duration="1500" className="lg:w-1/2 md:w-full px-8 py-4 text-center">
              <Image width={50} height={50} src="/app.gif" alt="app" />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">App Development</h2>
              <p className="leading-relaxed text-base text-justify mb-4">App development services typically refer to the process of creating software applications for mobile devices, such as smartphones and tablets. These services can involve designing, developing, and deploying applications across various platforms, including iOS (Apple) and Android (Google). </p>
            </div>
            <div data-aos="flip-right" data-aos-duration="1500" className="lg:w-1/2 md:w-full px-8 py-4 text-center">
              <Image width={50} height={50} src="/settings.gif" alt="seo" />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Digital Marketing</h2>
              <p className="leading-relaxed text-base text-justify mb-4">Digital marketing services encompass a wide range of strategies and activities aimed at promoting businesses online. Some common digital marketing services: Search engine optimization(SEO), Social Media Marketing(SMM), Email Marketing, Google Analytics. </p>
            </div>
          </div>
          <Link href={urls.it}><button className="flex mx-auto mt-2 mb-5 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">View More</button></Link>
        </div>
      </section>


      {/* paper_plan */}

      <div className="relative w-full h-14 -mt-2 -mb-10 md:hidden z-30">
        <Image layout='fill' src="/paper_plan.gif" alt="plan" />
      </div>


      {/* overseas */}
      <section className=" text-gray-600 body-font font-eng bg-bg">
        <div className="container px-5 py-10 mx-auto  flex flex-wrap items-center">
          <div data-aos="fade-right" data-aos-duration="800" className="floating lg:w-3/5 md:w-1/2 flex flex-col z-20 text-center w-full mb-6 bg-white rounded-md p-8 shadow-lg relative">
            <h2 className="text-2xl text-darken tracking-widest font-semibold mb-1">PnH Overseas</h2>
            <h1 className=" text-xl font-medium title-font mb-4 text-orange-500">Travles and Visa Processing</h1>
            <Image data-aos="zoom-in" data-aos-duration="500" width={4} height={2} src="/line.svg" alt="" />
            <p className="md:w-1/2 mt-4 mx-auto text-center leading-relaxed text-sm">We process all types of visas according to the clients demands. Here is the clients demand rate.  </p>

            {/* <div className="flex justify-between mb-3 mt-5">
              <span className="text-base font-medium text-darken dark:text-darken">Student Visa</span>
              <span className="text-sm font-medium text-darken dark:text-darken">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
              <div className="bg-light h-2.5 rounded-full w-[90%]" ></div>
            </div> */}
            <div className="flex justify-between mb-3 mt-5">
              <span className="text-base font-medium text-darken dark:text-darken">Tourist Visa</span>
              <span className="text-sm font-medium text-darken dark:text-darken">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
              <div className="bg-light h-2.5 rounded-full w-[60%]" ></div>
            </div>
            <div className="flex justify-between mb-3 mt-5">
              <span className="text-base font-medium text-darken dark:text-darken">Medical Visa</span>
              <span className="text-sm font-medium text-darken dark:text-darken">50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
              <div className="bg-light h-2.5 rounded-full w-[50%]" ></div>
            </div>
            {/* <div className="flex justify-between mb-3 mt-5">
              <span className="text-base font-medium text-darken dark:text-darken">Work Permit Visa</span>
              <span className="text-sm font-medium text-darken dark:text-darken">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
              <div className="bg-light h-2.5 rounded-full w-[10%]" ></div>
            </div> */}
          </div>

          <div data-aos="zoom-out" data-aos-duration="3000" className="floating lg:w-2/5 md:w-1/2 w-full relative pl-2">
            <Slider {...settings}>
              <div>
                <Image className='rounded-md' width={600} height={600} src="/tourist.png" alt="" />
              </div>
              <div>
                <Image className='rounded-md' width={600} height={600} src="/post-1.png" alt="" />
              </div>
              <div>
                <Image className='rounded-md' width={600} height={600} src="/post-2.png" alt="" />
              </div>
              <div>
                <Image className='rounded-md' width={600} height={600} src="/post-3.png" alt="" />
              </div>
            </Slider>
          </div>

        </div>
      </section>




      {/* shoping and study */}

      <section className=" text-gray-600 body-font font-eng">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
            {/* <div data-aos="flip-up" data-aos-duration="1500" className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <Image alt="content" width={1200} height={501} src="/plane.gif" />
              </div>
              <h2 className="text-2xl text-darken tracking-widest font-semibold mb-1">School Management System</h2>
              <h1 className=" text-xl font-medium title-font mb-2 text-orange-500">Control your full scholl in one platform</h1>
              <Image width={150} height={20} src="/line.svg" alt="" />
              <p className="md:w-1/2 mt-1 mx-auto text-center leading-relaxed text-sm">We will provide you all services related with School Management System. We also provide free consultation and try to give you all inoformation about this.</p>
              <Link href={urls.consultancy}><button className="flex mx-auto mt-4 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">Visit Now</button></Link>
            </div> */}
            <div data-aos="flip-up" data-aos-duration="1500" className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <Image alt="content" width={1200} height={501} src="/online_shop.gif" />
              </div>
              <h2 className="text-2xl text-darken tracking-widest font-semibold mb-1">Online Shopping</h2>
              <h1 className=" text-xl font-medium title-font mb-2 text-orange-500">Easy sale Bd</h1>
              <Image width={150} height={20} src="/line.svg" alt="" />
              <p className="md:w-1/2 mt-1 mx-auto text-center leading-relaxed text-sm">You can easily register on EasySale BD as a seller and start selling your products online across bangladesh..</p>
              <Link href={urls.shop}><button className="flex mx-auto mt-4 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">Visit Now</button></Link>
            </div>
          </div>
        </div>
      </section>



      {/* Ceo Message */}
      <section className="text-gray-600 body-font bg-bg font-eng">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div data-aos="flip-up" data-aos-duration="1500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0 ">
            <Image width={800} height={600} className="shadow-lg rounded" alt="ceo of pnh" src="/ceo.png" />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-2xl font-semibold title-font mb-2 text-orange-500 ">CEO MESSAGE</h1>
            <p className="mb-8 leading-relaxed text-justify">I am thrilled to address you as the CEO of PNH IT Solution. It is with great pride and excitement that I reflect on our journey so far and look forward to the future ahead.....
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <Link href="/about"><button className="inline-flex text-white bg-darken border-0 py-2 px-6 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">Read More</button></Link>
            </div>
          </div>
        </div>
      </section>




      {/* message */}

      <section className=" text-gray-600 body-font">
        <div className="container px-5 md:px-36 lg:px-52 py-10 mx-auto text-center">
          <h2 className='text-center text-2xl tracking-widest text-[#f68923] mb-2 -mt-4 font-semibold'>What People say about us</h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-[#076295] mb-2" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <Slider {...msg}>
            <div data-aos="fade-down" data-aos-duration="1000" className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed text-lg">I believe as an IT Firm, PNH is outstanding and committed to provide sincere service to its valued clients. I find it preactive in service. </p>
              <span className="inline-block h-1 w-10 rounded bg-darken mt-4 mb-2"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Mohammad Aminur Rahman</h2>
              <p className="text-gray-500">
                Founder & CEO of Mor Suraha
                <br />
                Adjunct Faculty JU & GUB
              </p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed text-lg">The design they created perfectly captures the essence of our brand and delivers a visually appealing and user-friendly interface. Our website now stands out from our competitors and effectively showcases our products/services. </p>
              <span className="inline-block h-1 w-10 rounded bg-darken mt-4 mb-2"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Abdul Hamid Gazi</h2>
              <p className="text-gray-500">Founder of Alifa Group LTD</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed text-lg">Taking services by  PNH IT Solution for  Web Design has been an exceptional experience. They truly understood our vision and translated it into a stunning website. From the initial consultation to the final launch, their team was highly professional, responsive, and attentive to our needs. </p>
              <span className="inline-block h-1 w-10 rounded bg-darken mt-4 mb-2"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Mohammad Sohel</h2>
              <p className="text-gray-500">Managing Director of Samir Group</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed text-lg">We highly recommend PNH BD Web Design to any business seeking a professional, reliable, and results-driven website development partner. Their dedication, creativity, and attention to detail have made them an invaluable asset to our online presence. </p>
              <span className="inline-block h-1 w-10 rounded bg-darken mt-4 mb-2"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Mr. Mamun</h2>
              <p className="text-gray-500">Founder & CEO of NLEXIC</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed text-lg">Taking services by  PNH IT Solution for  Web Design has been an exceptional experience. They truly understood our vision and translated it into a stunning website. From the initial consultation to the final launch, their team was highly professional, responsive, and attentive to our needs. </p>
              <span className="inline-block h-1 w-10 rounded bg-darken mt-4 mb-2"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Md. Monir Hossen</h2>
              <p className="text-gray-500">Founder of Mohammodia F&H LTD</p>
            </div>
          </Slider>
        </div>
      </section>


      {/* portfolio */}



      {/* clients */}

      <section className=" body-font bg-bg font-eng">
        <div className="lg:mx-10 mx-5 pt-10">
          <h2 className='text-center text-2xl tracking-widest text-[#f68923] mb-2 -mt-4 font-semibold'>Our Satisfied Clients</h2>
          <div className='py-10'>
            <Slider {...settings2} className='items-center'>
              <div>
                <a href='https://alifagroup.com/'><Image className='rounded-md items-center' width={120} height={120} src="/logo1.png" alt="" /></a>
              </div>
              <div>
                <a href='https://alifagroup.com/overseas/'><Image className='rounded-md items-center' width={120} height={120} src="/logo2.png" alt="" /></a>
              </div>
              <div>
                <a href='https://alifagroup.com/landmark/'><Image className='rounded-md items-center' width={120} height={120} src="/logo3.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/logo4.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/logo5.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/logo6.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/bestup.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/dcs.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/nlexic.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/feather.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/sadaka.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/motion.png" alt="" /></a>
              </div>
              <div>
                <a href='#'><Image className='rounded-md items-center' width={120} height={120} src="/ms.png" alt="" /></a>
              </div>
            </Slider>

          </div>
        </div>
      </section>

    </div>

  )
}
