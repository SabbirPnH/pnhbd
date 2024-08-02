
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
  // SliderImg
  const [slider, setSlider] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/sliders');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSlider(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  // sister concern 
  const [concern, setConcern] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setConcern(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
// Service Data
  const [service, setService] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  // It serivces 
  const [itservice, setItService] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/website-settings-info');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setItService(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
// Creative Service Data
  const [creativeservice, setCreativeService] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/creative/services');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCreativeService(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
// About Us 
const [aboutus, setAboutUs] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/about-us-home-one');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAboutUs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// Overseas
const [overseas, setOverseas] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/sliders/overseas');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setOverseas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// Ceo Message
const [ceo, setCeo] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/ceo-message');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCeo(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// shoping project
const [project, setProject] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// Reviews Message
const [message, setMessage] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/reviews');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// Client Logo
const [client, setClient] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/client-logo');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setClient(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
// Service verseas
const [serviceOverseas, setServiceOverseas] = useState([]); 
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.admin.pnhbd.com/api/service/overseas');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setServiceOverseas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

  return (
    <div className='overflow-x-hidden scrollbar-thin' >

      <Head>
        <title>PnH Corporation</title>
      </Head>

      {/* landing page */}
      <section className=" w-full text-gray-600 body-font font-eng bg-gradient-to-t from-[#03326e] to-[#076295] ...">
        <div className="container mx-auto flex px-5 pt-8 pb-20 md:pt-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
         
          {
          itservice.map((itName, id) => {
          const words = itName.name.split(' ');
          const lastWord = words.pop(); 
          const restOfTheWords = words.join(' ');
              
          return (
            <h1 key={id} data-aos="fade-right" data-aos-duration="500" className='title-font text-5xl md:text-6xl mb-4 font-semibold text-orange-400'>
              {restOfTheWords} 
              <span className='text-white'> {lastWord}</span>
            </h1>
          );
        })
      }


            <p className="mb-4 leading-relaxed text-white">
            {service.map((item, index) => (
         <React.Fragment key={index}>
        <a href={item.services_url} target='_blank' rel="noopener noreferrer">
            {item.services_name}
        </a>
        {index !== service.length - 1 && <span> | </span>}
        </React.Fragment>
        ))}
            </p>
            <div className="flex justify-center">
            {
            itservice.map((itButton,id)=>(
              <Link key={id} href={itButton.button_one_link}><button data-aos="fade-right" data-aos-duration="500" className="floating-4 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg  hover:scale-[1.1] duration-300 ...">{itButton.button_one}</button></Link>
             
            ))
          }
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="3000" className="floating lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <Slider {...settings}>
               {slider.map((sliderItem, id) => (
                <div key={id}>
                  <Image className='rounded-md' width={720} height={600} src={sliderItem.slider_image} alt={`Slider Image ${id}`} />
                </div>
              ))}

            </Slider>
          </div>
        </div>
      </section>

      {/* shape devider */}

      <div className="relative w-full h-20 -mt-8 md:-mt-24">
        <Image layout='fill' src="/divider.svg" alt="" />
      </div>

     

      {/* sister concern */}
      <section className=" text-gray-600 body-font pb-16 mt-[15.2px]  bg-bg font-eng ">
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-wrap -m-4 text-center justify-center">
          {concern.map((service,id)=>(
             <div key={id} data-aos="flip-left" data-aos-duration="500" className="p-4  md:w-1/3 sm:w-1/2 w-full md:-mt-16 ">
             <Link href={urls.it} target='_blank'>
              <div className='cursor-pointer shadow-xl  bg-cover bg-center  px-4 mb-20 py-6 rounded-lg hover:scale-[1.1] duration-1000'style={{ backgroundImage: `url(${service.bg_image})` }}>
               <Image src={service.image} alt="computer" width={50} height={50} />
               <h2 className="title-font font-medium text-2xl text-red-500 hover:text-gray-900 duration-500">{service.services_name}</h2>
               <p className="leading-relaxed text-light">{service.title}</p>
             </div></Link>
           </div>
           ))
           }
          </div>
        </div>
       
      </section>


      {/* about us */}
      <section className="text-gray-600 body-font font-eng bg-bg">
       {
        aboutus.map((item,id)=>(
          <div key={id} className="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center">
          <div data-aos="flip-left" data-aos-duration="500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-2 md:mb-0">
          <Image width={600} height={600} className="floating object-cover object-center rounded" alt="hero" src={item.image} />

          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-darken">{item.title}
            </h1>
            <p className="mb-2 md:mb-8 leading-relaxed text-justify">{item.text} </p>
            <div className="flex justify-center">
              <Link href={item.button_link}><button className="flex mx-auto mb-8 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">{item.button}</button></Link>
            </div>
          </div>
        </div>
        ))
       }
      </section>

      {/* It serivces  */}

      <section className=" text-gray-600 body-font font-eng bg-white">
        <div className="container px-5 py-4 mx-auto">
         {itservice.map((it,id)=>(
           <div key={id} className="flex flex-col text-center w-full mb-6">
           <h2 className=" text-2xl text-darken tracking-widest font-semibold mb-1">{it.name}</h2>
           <h1 className=" text-xl font-medium title-font mb-4 text-orange-500">{it.title}</h1>
           <Image data-aos="zoom-in" data-aos-duration="500" width={4} height={2} src={it.logo} alt="" />
           <p className="md:w-1/2 mt-4 mx-auto text-center leading-relaxed text-sm">{it.short_desp}</p>
         </div>
         ))}
          <div className="flex flex-wrap">
           {
            creativeservice.map((creative,id)=>(
              <div key={id} data-aos="flip-left" data-aos-duration="1500" className="lg:w-1/2 md:w-full px-8 py-4 items-center text-center">
              <Image width={50} height={50} src={creative.image}  alt="web" />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{creative.title}</h2>
              <p className="leading-relaxed text-base text-justify mb-4">{creative.text}</p>
            </div>
            ))
           }
          
          </div>
          {
            itservice.map((itButton,id)=>(
              <Link key={id} href={itButton.button_two_link}><button className="flex mx-auto mt-2 mb-5 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">{itButton.button_two}</button></Link>
            ))
          }
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
           {
            itservice.map((title,id)=>(
              <div key={id}>
                <h2 className="text-2xl text-darken tracking-widest font-semibold mb-1">{title.overseas_title}</h2>
              <h1 className=" text-xl font-medium title-font mb-4 text-orange-500">{title.overseas_short_title}</h1>
              {/* <Image data-aos="zoom-in" data-aos-duration="500" width={4} height={2} src="/line.svg" alt="" /> */}
              <p className="md:w-1/2 mt-4 mx-auto text-center leading-relaxed text-sm">{title.overseas_desp} </p>
              </div>
            ))
           }

            {serviceOverseas.map((overseas, id) => (
              <div key={id}>
                <div className="flex justify-between mb-3 mt-5">
                  <span className="text-base font-medium text-darken dark:text-darken">{overseas.title}</span>
                  <span className="text-sm font-medium text-darken dark:text-darken">{overseas.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                  <div
                    className="bg-light h-2.5 rounded-full"
                    style={{ width: `${overseas.percentage}%` }} 
                  ></div>
                </div>
              </div>
            ))}
           
          </div>

          <div data-aos="zoom-out" data-aos-duration="3000" className="floating lg:w-2/5 md:w-1/2 w-full relative pl-2">
            <Slider {...settings}>
             
            {
              overseas.map((oversea, id) => (
                <div key={id}>
                  <Image className='rounded-md' width={600} height={600} src={oversea.slider_image} alt="Slider image" />
                </div>
              ))
            }
            </Slider>
          </div>

        </div>
      </section>




      {/* shoping project*/}

      <section className=" text-gray-600 body-font font-eng">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
          {
            project.map((projectItem,id)=>(
              <div key={id} data-aos="flip-up" data-aos-duration="1500" className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <Image alt="content" width={1200} height={501} src="/online_shop.gif" />
              </div>
              <h2 className="text-2xl text-darken tracking-widest font-semibold mb-1">{projectItem.title_one}</h2>
              <h1 className=" text-xl font-medium title-font mb-2 text-orange-500">{projectItem.title_two}</h1>
              <Image width={150} height={20} src="/line.svg" alt="" />
              <p className="md:w-1/2 mt-1 mx-auto text-center leading-relaxed text-sm">{projectItem.short_desp}</p>
              {
            itservice.map((itButton,id)=>(
              <Link key={id} href={itButton.button_two_link}><button className="flex mx-auto mt-4 text-white bg-darken border-0 py-2 px-8 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">{itButton.button_two}</button></Link>
            ))
          }
            </div>
            ))
          }
          </div>
        </div>
      </section>



      {/* Ceo Message */}
      <section className="text-gray-600 body-font bg-bg font-eng">
       {
        ceo.map((message,id)=>(
          <div key={id} className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div data-aos="flip-up" data-aos-duration="1500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0 ">
            <Image width={800} height={600} className="shadow-lg rounded" alt="ceo of pnh" src={message.image} />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-2xl font-semibold title-font mb-2 text-orange-500 ">{message.title}</h1>
            <p className="mb-8 leading-relaxed text-justify">{message.text} </p>         
            <div className="flex w-full md:justify-start justify-center items-end">
              <Link href={message.button_link}><button className="inline-flex text-white bg-darken border-0 py-2 px-6 focus:outline-none hover:bg-light rounded text-lg transition ease-in-out delay-150 hover:scale-[1.1] duration-300 ...">{message.button}</button></Link>
            </div>
          </div>
        </div>
        ))
       }
      </section>




      {/* message */}

      <section className=" text-gray-600 body-font">
        <div className="container px-5 md:px-36 lg:px-52 py-10 mx-auto text-center">
        {
            itservice.map((itHeading,id)=>(
              <h2 key={id} className='text-center text-2xl tracking-widest text-[#f68923] mb-2 -mt-4 font-semibold'>{itHeading.review_sec_title}</h2>
            ))
          }
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-[#076295] mb-2" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <Slider {...msg}>
           {
            message.map((msgReview,id)=>(
              <div key={id} data-aos="fade-down" data-aos-duration="1000" className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <p className="leading-relaxed text-lg">{msgReview.review}</p>
              <span className="inline-block h-1 w-10 rounded bg-darken mt-4 mb-2"></span>

              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{msgReview.name}</h2>
              <p className="text-gray-500">
                {msgReview.designation}
               
              </p>
            </div>
            ))
           }
        
          </Slider>
        </div>
      </section>
      {/* portfolio */}



      {/* clients */}

      <section className="body-font bg-bg font-eng">
      <div className="lg:mx-10 mx-5 pt-10">
          {
            itservice.map((itHeading,id)=>(
              <h2 key={id} className='text-center text-2xl tracking-widest text-[#f68923] mb-2 -mt-4 font-semibold'>{itHeading.logo_sec_title}</h2>
            ))
          }
        <div className='py-10'>
        <Slider {...settings2} className='items-center my-slider'>
        {client.map((clientItem, id) => (
      <div key={id} className="group relative">
        <a href={clientItem.link} target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <Image
              className='rounded-md items-center'
              width={120}
              height={120}
              src={clientItem.image}
              alt={clientItem.title}
              title={clientItem.title}
            />
            
          </div>
        </a>
      </div>
    ))}
    </Slider>
        </div>
      </div>
    </section>

    </div>

  )
}
