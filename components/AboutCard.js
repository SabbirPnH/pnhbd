import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

const AboutCard = ({ data }) => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://admin.pnhbd.com/api/teams");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  var settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      {data.map((about, id) => {
        return (
          <section
            key={id}
            className={`text-gray-600 body-font font-eng ${
              id % 2 === 0 ? "bg-bg" : "bg-white"
            }`}
          >
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
              {id % 2 === 0 ? (
                <>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0"
                  >
                    <Image
                      width={800}
                      height={600}
                      className="shadow-lg rounded"
                      alt={about.alt}
                      src={about.image}
                    />
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                  >
                    <h1 className="text-2xl font-medium title-font mb-2 text-darken">
                      {about.title}
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                      {about.text}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
                  >
                    <h1 className="text-2xl font-medium title-font mb-2 text-darken">
                      {about.title}
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                      {about.text}
                    </p>
                  </div>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="1500"
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0"
                  >
                    <Image
                      width={800}
                      height={600}
                      className="shadow-lg rounded"
                      alt={about.alt}
                      src={about.image}
                    />
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}
      <div className="bg-bg">
        <div className="pt-4 sm:pt-10 sm:py-10 container mx-auto ">
          <h1 className="text-2xl font-medium title-font mb-2 text-darken text-center">
            Our Support Team
          </h1>
          <Slider {...settings2} className="items-center my-slider ">
            {teams.map((teamItems) => (
              <div
                key={teamItems.id}
                className="grid lg:grid-cols-4 md:grid-cols-3 max-md:justify-center sm:mt-5 "
              >
                <div className="border rounded-lg overflow-hidden m-5 ">
                  <Image
                    src={teamItems.image}
                    alt="team-members-img"
                    className="w-full h-96 object-cover"
                    width={400}
                    height={400}
                  />
                  <div className="p-4">
                    <h4 className="text-gray-800 text-base font-bold">
                      {teamItems.name}
                    </h4>
                    <p className="text-gray-800 text-xs mt-1">
                      {teamItems.title}
                    </p>
                    <div className="space-x-4 mt-2">
                      <Link href={teamItems.f_link}>
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            fill="#fff"
                            viewBox="0 0 155.139 155.139"
                          >
                            <path
                              d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                              data-original="#010002"
                            />
                          </svg>
                        </button>
                      </Link>
                      <Link href={teamItems.t_link}>
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            fill="#fff"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                              data-original="#03a9f4"
                            />
                          </svg>
                        </button>
                      </Link>
                      <Link href={teamItems.l_link}>
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            fill="#fff"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                              data-original="#0077b5"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
