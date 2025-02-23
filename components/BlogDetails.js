import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const blogs = [
  {
    img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_2.png",
    title: "Decide what type of teacher you want to be",
    date: "August 10",
    author: "Alan Bell",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png",
    title: "Decide what type of teacher you want to be",
    date: "August 10",
    author: "Alan Bell",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png",
    title: "Decide what type of teacher you want to be",
    date: "14 Feb, 25",
    author: "Alan Bell",
  },
];

const BlogItem = ({ item }) => {
  return (
    <div className="flex justify-between items-start gap-4">
      <img src={item.img} alt="" className="img-fluid " />
      <div className="ml-3">
        <h6 className="mb-2 text-[#03326e]   font-medium leading-tight  ">
          {item.title}
        </h6>
        <div className="flex flex-wrap items-center gap-1 opacity-50">
          <MdDateRange />
          <span className="mr-3">{item.date}</span>
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Contents = () => (
  <div>
    <br />
    <h5 className="mb-2 text-[17px] text-black font-medium opacity-90">
      1. Steps to becoming a teacher
    </h5>
    <p className="text-[15px] mb-2 opacity-80 text-justify">
      Being a teacher is always exciting. It opens a new horizon for us to serve
      and build the nation in a noble way. In order to become a teacher, you
      have to undertake a number of steps. So let’s get started to explore:
    </p>

    <br />
    <h5 className="mb-2 text-[17px] text-black font-medium opacity-90">
      2. Decide what type of teacher you want to be
    </h5>
    <p className="text-[15px] mb-2 text-justify opacity-80">
      Teachers can be of several types such as nursery teachers, school
      teachers, special teachers, professors and so on. So, before stepping into
      the route to become a teacher, decide first what type of teacher you want
      to be. In the UK, the education system is broadly divided into two
      systems.
    </p>

    <br />
    <h5 className="mb-2 text-[17px] text-black font-medium opacity-90">
      3. Decide your preferred subject
    </h5>
    <p className="text-[15px] mb-2 text-justify opacity-80">
      In primary schools, you may be responsible for teaching multiple subjects.
      But in the secondary schools, it’s most likely that you’ll be teaching the
      subject in which you did your major. So, it’s your choice which subject do
      you want to teach. It’s necessary to decide this because it will keep you
      on the track to become a teacher and step forward to make your
      preparation.
    </p>
  </div>
);

const Social = ({ list, index }) => (
  <a href={list.href} className="text-lg sm:text-[22px]">
    <FontAwesomeIcon
      icon={list.icon}
      className={classNames({ "mr-3": index })}
    />
  </a>
);

Social.propTypes = {
  list: PropTypes.object.isRequired,
  index: PropTypes.number,
};

const SocialContent = () => (
  <div className="flex sm:flex-row items-center justify-between my-5 sm:mr-12">
    <div className="flex sm:flex-row items-center">
      <div className="flex items-center gap-2 ">
        <FaUser className="mb-0 font-semibold text-md opacity-80" />
        <p className="mb-0 font-semibold text-md  opacity-80">By Admin</p>
      </div>
      <p className="ml-3 ">August 10th, 2020</p>
    </div>
  </div>
);

const SideBar = () => (
  <div className="p-8 border-2">
    <h2 class="text-lg font-bold flex items-center gap-2 pb-5">
      <span class="border-l-4 border-orange-500 h-5 text-[#0D1B2A]"></span>{" "}
      Latest News
    </h2>
    {blogs.map((item, i) => (
      <Fragment key={i}>
        {!!i && <hr className="my-4" />}
        <BlogItem item={item} />
      </Fragment>
    ))}
  </div>
);

const BlogDetails = () => {
  return (
    <section className=" light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-2 px-4"></div>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-10">
          <div className="col-span-12 lg:col-span-8 p-7 border-2 order-2 sm:order-1">
            <img
              src="https://consultancy.pnhbd.com/assets/front/img/blog/16130436082031699655.jpg"
              alt=""
              className="w-full h-auto "
            />
            <h1 className="font-bold text-[17px]  md:text-3xl mb-5 text-[#03326e] mt-2">
              How to Pitch a Video Game: 7 Tips for Pitching Games
            </h1>
            {/* social content */}
            <SocialContent />

            {/* contents */}
            <Contents />
          </div>

          {/* sidebar */}
          <div className="col-span-12  lg:col-span-6 lg:col-start-9  md:pl-6 lg:pl-0 order-1 sm:order-2">
            <div className="border-2 p-8 mb-5">
              <h2 class="text-lg font-bold flex items-center gap-2 pb-4">
                <span class="border-l-4  border-orange-500 h-5 text-[#0D1B2A]"></span>{" "}
                Search Blog
              </h2>
              <div className="w-full  relative ">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" bg-[#f5faff] text-[#69a1bb]  py-3 pl-4 pr-[65px] outline-none w-full "
                />

                <span className="bg-[#0D1B2A] text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center cursor-pointer hover:bg-orange-500 group transition duration-300 ease-in-out">
                  <IoSearch className="text-[1.3rem]  " />
                </span>
              </div>
            </div>

            <div class="bg-white  border-2 mb-5">
              <div class=" space-y-2 p-8">
                <h2 class="text-lg font-bold flex items-center gap-2 pb-5">
                  <span class="border-l-4 border-orange-500 h-5 text-[#0D1B2A]"></span>{" "}
                  Categories
                </h2>
                <div class="flex justify-between bg-[#0D1B2A] text-white px-5 py-3 relative cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out ">
                  <span>Study Abroad</span>
                  <span class="font-bold bg-[#091222] absolute top-0 right-0 h-full px-5 flex items-center justify-center  ">
                    1
                  </span>
                </div>
                <div class="flex justify-between bg-[#0D1B2A] text-white px-5 py-3 relative cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out">
                  <span>Work Permit VISA</span>
                  <span class="font-bold bg-[#091222] absolute top-0 right-0 h-full px-5 flex items-center justify-center  ">
                    1
                  </span>
                </div>
                <div class="flex justify-between bg-[#0D1B2A] text-white px-5 py-3 relative cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out">
                  <span>Tourist VISA</span>
                  <span class="font-bold bg-[#091222] absolute top-0 right-0 h-full px-5 flex items-center justify-center  ">
                    1
                  </span>
                </div>
                <div class="flex justify-between bg-[#0D1B2A] text-white px-5 py-3 relative cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out">
                  <span>Medical VISA</span>
                  <span class="font-bold bg-[#091222] absolute top-0 right-0 h-full px-5 flex items-center justify-center  ">
                    0
                  </span>
                </div>
              </div>
            </div>
            <SideBar />

            <div className="border-2 p-8 mt-5">
              <h2 class="text-lg font-bold flex items-center gap-2 pb-4">
                <span class="border-l-4  border-orange-500 h-5 text-[#0D1B2A]"></span>{" "}
                Never Miss News
              </h2>
              <div className="flex gap-5">
                <div className="bg-[#0D1B2A] p-2.5 cursor-pointer">
                  <FaFacebookF className="text-xl font-bold text-white  " />
                </div>
                <div className="bg-[#0D1B2A] p-2.5 cursor-pointer">
                  <FaFacebookMessenger className="text-xl font-bold text-white  " />
                </div>
                <div className="bg-[#0D1B2A] p-2.5 cursor-pointer">
                  <FaYoutube className="text-xl font-bold text-white  " />
                </div>
                <div className="bg-[#0D1B2A] p-2.5 cursor-pointer">
                  <FaInstagram className="text-xl font-bold text-white  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetails;
