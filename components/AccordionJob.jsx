
import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaPlus,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";
import { MdDateRange, MdAccessTimeFilled } from "react-icons/md";
import axios from "axios";

const AccordionJob = () => {
  const [jobs, setJobs] = useState([]);
  const [isPlusAccording, setIsPlusAccording] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://admin.pnhbd.com/api/jobs");
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div>
      <div className="text-center text-3xl font-bold mb-2 mt-10">Latest Jobs</div>
      <div className="text-center text-sm text-gray-500 uppercase">
        - Newly Created Jobs -
      </div>
      <div className="bg-bg">
        <div className="flex gap-3 flex-col w-full container mx-auto px-5 mt-[30px] py-10">
          {jobs.map((job, index) => (
            <article key={job.id} className="border border-[#e5eaf2] bg-white p-3">
              <div
                className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 w-full"
                onClick={() => handleBorderClick(index)}
              >
                <h2 className="text-darken sm:font-[600] text-md sm:text-[1.2rem] sm:col-span-2 flex items-center gap-3">
                  <FaPlus
                    className={`text-[1.2rem] text-text transition-all duration-300 cursor-pointer ${
                      isPlusAccording === index && "rotate-[45deg] !text-[#32a6e0]"
                    }`}
                  />
                  {job.title}
                </h2>

                <p
                  className={`justify-self-start sm:justify-self-center flex items-center gap-2 text-md ${
                    job.available === "available" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {job.available === "available" ? (
                    <>
                      <FaCheckCircle className="w-4 h-4" /> available
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="w-4 h-4" /> unavailable
                    </>
                  )}
                </p>

                <div className="hidden sm:flex justify-end gap-3 items-center">
                  <Link href="/job">
                    <a>
                      <button className="px-6 py-1 border cursor-pointer border-[#32a6e0] hover:bg-[#32a6e0] text-[#32a6e0] hover:text-[#fff] transition duration-300 rounded w-auto font-semibold flex items-center gap-2">
                        Apply <FaArrowRight />
                     </button>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-5 mt-2 font-mono text-gray-700">
                <div className="sm:flex gap-7 text-md">
                  <p>
                    <IoLocationSharp className="inline-flex mr-2 w-4 h-4 text-[#32a6e0]" />
                    {job.location}
                  </p>
                  <p>
                    <TbCoinTaka className="inline-flex w-4 h-4 text-[#32a6e0]" /> {job.salary_range}
                  </p>
                </div>
                <p className="sm:justify-self-end text-md">
                  <MdAccessTimeFilled className="inline-flex w-4 h-4 sm:hidden block text-[#32a6e0]" /> {job.type}
                </p>
                <p className="sm:justify-self-end text-md">
                  <MdDateRange className="inline-flex w-4 h-4 mr-2 text-[#32a6e0] items-center" />
                  {job.dead_line}
                </p>
              </div>

              <div className="flex sm:hidden gap-3 items-center mt-3">
                <Link href="/job">
                  <a>
                    <button className="px-6 py-1 w-80 border justify-center cursor-pointer border-[#32a6e0] hover:bg-[#32a6e0] text-[#32a6e0] hover:text-[#fff] transition duration-300 rounded font-semibold flex items-center gap-2">
                      Apply <FaArrowRight />
                    </button>
                  </a>
                </Link>
              </div>

              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                  isPlusAccording === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                  {` ${job.job}`}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionJob;

