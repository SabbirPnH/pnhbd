import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ postPage, totalPost, setCurrentPage, currentPage }) => {
  let pages = [];
  const totalPages = Math.ceil(totalPost / postPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex items-center flex-wrap justify-center pb-7 space-x-1 sm:space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <FaChevronLeft />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`mx-1 px-4 py-2 text-[0.9rem] sm:text-[1rem] rounded-full transform transition-all duration-300 ${
            currentPage === page
              ? "bg-orange-500 text-white scale-110 shadow-md"
              : "bg-transparent text-blue-600 hover:bg-blue-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
