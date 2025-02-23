import Gallery from "../components/Gallery";
const GalleryPage = () => {

  return (
    <div>
      <div class="relative mt-10 bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden h-80">
        <div class="absolute inset-0">
          <img src="/gallery.jpg" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Explore Our Visual Story
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Browse through a curated collection of stunning images that capture
            moments 
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  );
};
export default GalleryPage; 
