import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import AboutCard from '../components/AboutCard'

const About = () => {

   //about us page
   const [about, setAbout] = useState([]); 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('https://www.admin.pnhbd.com/api/about-us');
         if (!response.ok) {
           throw new Error('Failed to fetch data');
         }
         const data = await response.json();
         setAbout(data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
     fetchData();
   }, []);


  return (
    <div className='overflow-x-hidden scrollbar-thin mt-[60px]'>

      <Head>
        <title>About | PnH Corporation</title>
      </Head>
      <AboutCard data={about}/>

    </div>
  )
}

export default About