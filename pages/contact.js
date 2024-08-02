
import React, { useState } from 'react';
import Head from 'next/head';
import data from '../components/Data';
import axios from 'axios';

const Contact = () => {
  const [post, setPost] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
      .then(res => {
        console.log(res);
        // Optionally, clear the form fields after successful submission
        setPost({
          name: '',
          email: '',
          number: '',
          message: ''
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='bg-bg font-eng overflow-x-hidden scrollbar-thin'>
      <Head>
        <title>Contact Us</title>
      </Head>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 md:py-14 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.1501322210574!2d90.369843!3d23.8042959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d154ff5095%3A0x914bd669ac3a2dab!2sPnH%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1689418229460!5m2!1sen!2sbd" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="floating-4 bg-white relative flex flex-wrap py-6 rounded shadow-2xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-darken tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1"><a href={data.settings.addressLink}>{data.settings.address}</a></p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-darken tracking-widest text-xs">EMAIL</h2>
                <a href={data.settings.emailLink} className="text-indigo-500 leading-relaxed">{data.settings.email}</a>
                <h2 className="title-font font-semibold text-darken tracking-widest text-xs mt-4">PHONE</h2>
                <a href={data.settings.mobileLink} className="text-indigo-500 leading-relaxed">{data.settings.mobile}</a>
              </div>
            </div>
          </div>

          <div className="bg-bg lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-darken text-lg mb-1 font-semibold title-font">Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Feel free to Contact us and share your opinion.</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input value={post.name} onChange={handleInput} required type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input value={post.email} onChange={handleInput} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="number" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                <input value={post.number} onChange={handleInput} required type="number" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea value={post.message} onChange={handleInput} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button type="submit" className="text-white bg-darken border-0 py-2 px-6 focus:outline-none hover:bg-light rounded text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

