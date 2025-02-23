// import BlogCard from "../components/BlogCard";
// import AllBlog from "../components/AllBlog";
// import { useEffect, useState } from 'react';
// import Pagination from "./Paginations";
// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
// const [currentPage,setCurrentPage]=useState(1)
// const [postPage,setPostPage]=useState(8)
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const res = await fetch('https://admin.pnhbd.com/api/blogs'); // Your API endpoint
//       const data = await res.json();
//       setBlogs(data.blogs); // Access the blogs array from the response
//     };

//     fetchBlogs();
//   }, []);
//   const lastPostIndex=currentPage * postPage
//   const fastPostIndex=lastPostIndex - postPage
//   const crruntPost=blogs.slice(fastPostIndex,fastPostIndex)
//   return (
//     <div>
//       <div class="flex items-center space-x-4 px-5 container mx-auto mt-4">
//         <h2 class="text-lg font-semibold text-gray-900">Featured</h2>
//         <div class="flex-1 border-t border-gray-300"></div>
//       </div>
//       <div className="grid grid-cols-1  sm:grid-cols-2 gap-10 px-5 container mx-auto py-8">
//         {blogs.map((blog) => (
//           <BlogCard key={blog.id} {...blog} />
//         ))}
//       </div>

//       <div class="flex items-center space-x-4 px-5 container mx-auto">
//         <h2 class="text-lg font-semibold text-gray-900">All Stories</h2>
//         <div class="flex-1 border-t border-gray-300"></div>
//       </div>

//       <div className="grid grid-cols-1  sm:grid-cols-3 gap-10 px-5 container mx-auto py-8">
//         {blogs.map((blog) => (
//          <div key={blog.id}>
//            <AllBlog {...blog} crruntPost={crruntPost}/>
//            <Pagination totallPost={crruntPost.length} postPage={postPage} />
//          </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default BlogList;





import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import AllBlog from "../components/AllBlog";
import Pagination from "./Paginations";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPage, setPostPage] = useState(8);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("https://admin.pnhbd.com/api/blogs");
                const data = await res.json();
                setBlogs(data.blogs);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    const lastPostIndex = currentPage * postPage;
    const firstPostIndex = lastPostIndex - postPage;
    const currentPosts = blogs.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <div className="flex items-center space-x-4 px-5 container mx-auto mt-4">
                <h2 className="text-lg font-semibold text-gray-900">Featured</h2>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-5 container mx-auto py-8">
                {blogs.slice(0, 6).map((blog) => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>

            <div className="flex items-center space-x-4 px-5 container mx-auto">
                <h2 className="text-lg font-semibold text-gray-900">All Stories</h2>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 container mx-auto py-8">
                {currentPosts.map((blog) => (
                    <div key={blog.id}>
                        <AllBlog {...blog} />
                    </div>
                ))}
            </div>

            <Pagination totalPost={blogs.length} postPage={postPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
    );
};

export default BlogList;
