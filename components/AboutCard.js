
import React from 'react';
import Image from 'next/image'
const AboutCard = ({data}) => {
    
    return (
        <section>
        {data.map((about, id) => {
    return (
        <section
            key={id}
            className={`text-gray-600 body-font font-eng ${id % 2 === 0 ? 'bg-bg' : 'bg-white'}`}
        >
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                {id % 2 === 0 ? (
                    <>
                        <div data-aos="flip-up" data-aos-duration="1500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0">
                            <Image width={800} height={600} className="shadow-lg rounded" alt={about.alt} src={about.image} />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="text-2xl font-medium title-font mb-2 text-darken">{about.title}</h1>
                            <p className="mb-8 leading-relaxed text-justify">{about.text}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div data-aos="fade-right" data-aos-duration="1000" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="text-2xl font-medium title-font mb-2 text-darken">{about.title}</h1>
                            <p className="mb-8 leading-relaxed text-justify">{about.text}</p>
                            
                            
                        </div>
                        <div data-aos="flip-up" data-aos-duration="1500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0">
                            <Image width={800} height={600} className="shadow-lg rounded" alt={about.alt} src={about.image} />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
})}

        </section>
    );
};

export default AboutCard;