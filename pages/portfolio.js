import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'aos/dist/aos.css';
import Head from 'next/head';


const PortfolioPage = () => {
   const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.pnhbd.com/api/portfolio');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='overflow-x-hidden scrollbar-thin'>
      <Head>
        <title>Portfolio | PnH Corporation</title>
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {profile.map((portfolio, id) => {
        return (
          <div key={id} data-aos="flip-up" data-aos-duration="1000" className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                width={720}
                height={400}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={portfolio.image}
                alt={portfolio.title}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {portfolio.title}
                </h1>
                <p className="leading-relaxed mb-3">{portfolio.short_desp}</p>
                {portfolio.button_link && (
                  <Link href={portfolio.button_link}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      {portfolio.button}
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
