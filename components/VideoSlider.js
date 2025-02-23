

import { useState, useEffect } from "react";
import { Modal } from "antd";
import Slider from "react-slick";

const VideoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("https://admin.pnhbd.com/api/videos");
      const data = await response.json();
      setMedia(data);
    };
    fetchVideos();
  }, []);

  const convertToEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  const openVideo = (videoLink) => {
    setActiveVideo(convertToEmbedUrl(videoLink));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveVideo(""), 300);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
    ],
  };

  return (
    <section className="body-font bg-bg font-eng">
      <div className="lg:mx-10 mx-5 pt-10">
        <h2 className="text-center text-2xl tracking-widest text-darken mb-2 -mt-4 font-semibold">
          Our Video Gallery
        </h2>

        {/* Video Slider */}
        <div className="py-10">
          <Slider {...sliderSettings} className="items-center my-slider">
            {media.map((item, id) => (
              <div
                key={id}
                className="group relative cursor-pointer px-2"
                onClick={() => openVideo(item.link)}
              >
                <div className="w-full overflow-hidden rounded-md relative cursor-pointer group">
                  <img
                    src={item.image}
                    alt={`video-thumbnail-${id}`}
                    className="w-full h-full object-cover group-hover:scale-[1.15] group-hover:rotate-[8deg] transition-all duration-300 ease-out"
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-2 rounded-full">
                      <svg
                        className="w-8 h-8 text-darken"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={800}
        destroyOnClose
      >
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-medium text-gray-900">Watch Video</h2>
        </div>
        {activeVideo && (
          <iframe
            key={activeVideo}
            width="100%"
            height="400"
            src={`${activeVideo}?autoplay=1&mute=1`}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    </section>
  );
};

export default VideoGallery;