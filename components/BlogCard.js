import Link from "next/link";
const BlogCard = ({ image, title, short_desp, author, id, date }) => {
  return (
    <div className=" bg-white  overflow-hidden border">
      <div className="grid lg:grid-cols-3">
        {/* Image Section */}
        <div className="col-span-1">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Delicious Food"
          />
        </div>

        {/* Content Section */}
        <div className=" lg:col-span-2 p-4">
          <Link href={`/blogs/${id}`}>
            <h2 className="text-lg font-bold text-gray-900 cursor-pointer">
              {title}
            </h2>
          </Link>
          <p className="text-gray-600 text-sm mt-2">{short_desp}</p>

          {/* Author Info */}
          <div className="flex items-center mt-4">
            <img
              className="w-8 h-8 rounded-full"
              src="/business-manager-2 (1).jpg"
              alt="Author"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-900 cursor-pointer hover:underline">
                {author}
              </p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>

            {/* Bookmark Icon */}
            <div className="ml-auto cursor-pointer">
              <Link href={`/blogs/${id}`}>
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
    </div>
  );
};

export default BlogCard;
