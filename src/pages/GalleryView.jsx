import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './scrollbar.css'; // import the custom scrollbar-hide CSS

const GalleryView = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/gallery');
        setGalleryImages(res.data);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...prev, entry.target.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    const images = document.querySelectorAll('.gallery-image');
    images.forEach((image) => observer.observe(image));

    return () => {
      images.forEach((image) => observer.unobserve(image));
    };
  }, [galleryImages]);

  const getCorrectedImageUrl = (url) => {
    if (!url)
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
      return url.replace('http://localhost:5000', 'http://localhost:5000');
    }
    if (url.startsWith('/uploads')) {
      return `http://localhost:5000${url}`;
    }
    return url;
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="pt-10 overflow-hidden relative">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="block bg-purple-100 text-purple-700 px-5 py-4 rounded-full text-xl font-semibold mb-4 tracking-wide text-center w-full">
            Our Gallery
            </span>
            {/* <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide text-center w-full">
              
            </span> */}
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and vibrant campus life through our photo gallery.
            </p>
          </div>

          <div className="relative mb-12">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hover:bg-gray-100"
            >
              <FaArrowLeft />
            </button>

            {/* Scrollable Gallery */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-6 snap-x snap-mandatory overflow-x-auto px-4 sm:px-6 md:px-8 scroll-smooth scrollbar-hide"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={`left-${index}`}
                  id={`image-${index}`}
                  className={`gallery-image flex-shrink-0 w-72 snap-center transition-all duration-500 ease-in-out transform ${visibleImages.includes(`image-${index}`)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
                >
                  <div className="group relative h-64 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                    <img
                      src={getCorrectedImageUrl(image.imageUrl)}
                      alt={image.name || 'Gallery Image'}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
                      }}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 p-4">
                        {image.category && (
                          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full mb-2">
                            {image.category}
                          </span>
                        )}
                        <h3 className="text-lg font-bold text-white">{image.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hover:bg-gray-100"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryView;
