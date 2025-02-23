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
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await fetch(`https://admin.pnhbd.com/api/blogs/${id}`);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }
  const data = await response.json();
  const blogCategory = data.blogs;

  const res = await fetch(`https://admin.pnhbd.com/api/blog/${id}`);
  if (!res.ok) {
    return {
      notFound: true, // Trigger 404 if the blog doesn't exist
    };
  }
  const blogData = await res.json();
  const blog = blogData.blog; // Access the 'blog' property from the response
  const latestBlogs = blogData.latest_blogs.slice(0, 4);
  const blogs_cat = blogData.blogs_cat;

  return {
    props: { blogCategory, blogs_cat, blog, latestBlogs },
  };
}

const BlogItem = ({ item }) => {
  return (
    <div className="flex  items-start gap-4">
      <img src={item.image} alt="" className="w-24 h-20" />
      <div className="ml-3">
        <Link href={`/blogs/${item.id}`}>
          <h6 className="mb-2 text-[#03326e]  cursor-pointer hover:underline font-medium leading-tight  ">
            {item.title}
          </h6>
        </Link>
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

const Contents = ({ blog }) => (
  <div>
    <p
      className="text-[15px] mb-2 text-justify opacity-80"
      dangerouslySetInnerHTML={{ __html: blog.desp }}
    ></p>
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

const SocialContent = ({ author, date }) => (
  <div className="flex sm:flex-row items-center justify-between my-5 sm:mr-12">
    <div className="flex sm:flex-row items-center">
      <div className="flex items-center gap-2 ">
        <FaUser className="mb-0 font-semibold text-md opacity-80" />
        <p className="mb-0 font-semibold text-md  opacity-80">{author}</p>
      </div>
      <p className="ml-3 ">{date}</p>
    </div>
  </div>
);

const SideBar = ({ latestBlogs }) => (
  <div className="p-8 border-2">
    <h2 class="text-lg font-bold flex items-center gap-2 pb-5">
      <span class="border-l-4 border-orange-500 h-5 text-[#0D1B2A]"></span>{" "}
      Latest News
    </h2>
    {latestBlogs.map((item, i) => (
      <Fragment key={i}>
        {!!i && <hr className="my-4" />}
        <BlogItem item={item} />
      </Fragment>
    ))}
  </div>
);

const Category = ({ blogCategory, blogs_cat, latestBlogs, blog }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only run on client
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <div>
        <div class="relative mt-10 bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden h-80">
          <div class="absolute inset-0">
            <img
              src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?semt=ais_hybrid"
              alt="Background Image"
              class="object-cover object-center w-full h-full"
            />
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 class="text-5xl font-bold leading-tight mb-4">blog Details</h1>
            <p class="text-lg text-gray-300 mb-8">
              Dive into a world of valuable insights, expert tips, and inspiring
              stories.
            </p>
          </div>
        </div>
      </div>
      <section className=" light py-14 md:py-24 bg-white dark:bg-[#0b1727]  text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-3 md:col-span-2 px-4"></div>
          </div>

          <div className="grid grid-cols-12 gap-4 sm:gap-10 ">
            <div className="col-span-12 lg:col-span-8 p-7 border-2 order-2 sm:order-1">
              <div className="grid lg:grid-cols-2 gap-4 ">
                {/* Image Section */}

                {blogCategory.map((ctg) => (
                  <div key={ctg.id} className="col-span-1 border">
                    <img
                      className="h-[200px] w-full "
                      src={ctg.image}
                      alt={ctg.title}
                    />
                    {/* Content Section */}
                    <div className=" lg:col-span-2 p-4">
                      <Link href={`/blogs/${ctg.id}`}>
                        <h2 className="text-lg font-bold text-gray-900 cursor-pointer">
                          {ctg.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 text-sm mt-2">
                        {ctg.short_desp}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center mt-4">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="/business-manager-2 (1).jpg"
                          alt="Author"
                        />
                        <div className="ml-2">
                          <p className="text-sm font-semibold text-gray-900 cursor-pointer hover:underline">
                            {ctg.author}
                          </p>
                          <p className="text-xs text-gray-500">{ctg.date}</p>
                        </div>

                        {/* Bookmark Icon */}
                        <div className="ml-auto cursor-pointer">
                          <Link href={`/blogs/${ctg.id}`}>
                            <button className="text-gray-500 hover:text-gray-900">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  {blogs_cat.map((category) => (
                    <div
                      key={category.id}
                      class="flex justify-between bg-[#0D1B2A] text-white px-5 py-3 relative cursor-pointer hover:bg-orange-500 transition duration-300 ease-in-out "
                    >
                      <Link href={`/category/${category.id}`}>
                        <span>{category.name}</span>
                      </Link>
                      <span class="font-bold bg-[#091222] absolute top-0 right-0 h-full px-5 flex items-center justify-center  ">
                        {category.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <SideBar latestBlogs={latestBlogs} />

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
    </div>
  );
};
export default Category;
