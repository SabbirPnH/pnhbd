import BlogDetails from "../components/BlogDetails";
const BlogDetailsPage = () => {
  return (
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
      <BlogDetails />
    </div>
  );
};
export default BlogDetailsPage;
