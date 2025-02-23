import BlogList from "../../components/BlogList";
const BlogPage = () => {
  return (
    <section className="bg-bg">
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
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Explore Our Latest Posts
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Dive into a world of valuable insights, expert tips, and inspiring
            stories.
          </p>
        </div>
      </div>
      <BlogList />
    </section>
  );
};

export default BlogPage;

// // pages/index.js or pages/blogs/index.js
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// const BlogList = () => {
// const [blogs, setBlogs] = useState([]);

// useEffect(() => {
//   const fetchBlogs = async () => {
//     const res = await fetch('https://admin.pnhbd.com/api/blogs'); // Your API endpoint
//     const data = await res.json();
//     setBlogs(data.blogs); // Access the blogs array from the response
//   };

//   fetchBlogs();
// }, []);

//   return (
//     <div className='mt-44 p-5'>
//       <h1 className='text-2xl font-bold mb-4'>Blog List</h1>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id} className='mb-4'>
//             <Link href={`/blogs/${blog.id}`}>
//               <a className='text-blue-500 underline text-lg'>{blog.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BlogList;
