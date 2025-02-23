// import { Image } from "antd";

// const images = [
//   "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
//   "/gallery (1).jpg",
//   "/gallery (8).jpg",
//   "/gallery (1).jpg",
//   "/gallery (9).jpg",
//   "/gallery (6).jpg",
//   "/gallery (7).jpg",
//   "/gallery@ (1).jpg",
//   "/gallery@ (2).jpg",
//   "/gallery@ (3).jpg",
  
// ];

// const Gallery = () => (
//   <Image.PreviewGroup>
//     <div className="grid grid-cols-2 gap-4 md:grid-cols-4 container mx-auto px-5 py-4">
//       {images.map((src, index) => (
//         <div key={index} className="grid gap-4">
//           <Image
//             className="h-auto max-w-full rounded-lg object-cover object-center"
//             src={src}
//             alt={`gallery-photo-${index}`}
//           />
//         </div>
//       ))}
//     </div>
//   </Image.PreviewGroup>
// );

// export default Gallery;





// import { Image } from "antd";

// const cloudServicesImages = [
//   "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//   "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
//   "/gallery (1).jpg",
//   "/gallery (8).jpg",
//   "/gallery (1).jpg",
//   "/gallery (9).jpg",
//   "/gallery (6).jpg",
// ];

// const itConsultingImages = [
//   "/gallery (7).jpg",
//   "/gallery@ (1).jpg",
//   "/gallery@ (2).jpg",
//   "/gallery@ (3).jpg",
  
// ];

// const Gallery = () => (
//   <div className="container mx-auto px-5">
//     {/* IT Consulting */}
//     <div class="flex items-center space-x-4 mt-4">
//         <h2 class="text-lg font-semibold text-gray-900">IT Consulting</h2>
//         <div class="flex-1  border-t border-gray-300"></div>
//       </div>
//     <Image.PreviewGroup>
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-4  py-4">
//         {cloudServicesImages.map((src, index) => (
//           <div key={index} className="grid gap-4">
//             <Image
//               className="h-auto max-w-full rounded-lg object-cover object-center"
//               src={src}
//               alt={`cloud-service-photo-${index}`}
//             />
//           </div>
//         ))}
//       </div>
//     </Image.PreviewGroup>

//     {/* System Integration */}
//     <div class="flex items-center space-x-4 ">
//         <h2 class="text-lg font-semibold text-gray-900">System Integration</h2>
//         <div class="flex-1  border-t border-gray-300"></div>
//       </div>
//     <Image.PreviewGroup>
//       <div className="grid grid-cols-2 gap-4 md:grid-cols-4  py-4">
//         {itConsultingImages.map((src, index) => (
//           <div key={index} className="grid gap-4">
//             <Image
//               className="h-auto max-w-full rounded-lg object-cover object-center"
//               src={src}
//               alt={`it-consulting-photo-${index}`}
//             />
//           </div>
//         ))}
//       </div>
//     </Image.PreviewGroup>
//   </div>
// );

// export default Gallery;





import { useEffect, useState } from "react";
import { Image, Spin } from "antd";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching gallery data from the API
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("https://admin.pnhbd.com/api/gallery");
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error("Failed to fetch gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Grouping images by category
  const groupedImages = galleryData.reduce((acc, image) => {
    if (!acc[image.image_cat_name]) {
      acc[image.image_cat_name] = [];
    }
    acc[image.image_cat_name].push(image.image);
    return acc;
  }, {});

  if (loading) {
    return <Spin className="flex justify-center items-center h-screen" />;
  }

  return (
    <div className="container mx-auto px-5">
      {Object.entries(groupedImages).map(([category, images], idx) => (
        <div key={idx}>
          {/* Category Title */}
          <div className="flex items-center space-x-4 mt-8">
            <h2 className="text-lg font-semibold text-gray-900">{category}</h2>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Images */}
          <Image.PreviewGroup>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 py-4">
              {images.map((src, index) => (
                <div key={index} className="grid gap-4">
                  <Image
                    className="h-auto max-w-full rounded-lg object-cover object-center"
                    src={src}
                    alt={`${category.toLowerCase().replace(/\s+/g, '-')}-photo-${index}`}
                  />
                </div>
              ))}
            </div>
          </Image.PreviewGroup>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

