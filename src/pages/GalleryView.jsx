// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import './scrollbar.css'; // import the custom scrollbar-hide CSS

// const GalleryView = () => {
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [visibleImages, setVisibleImages] = useState([]);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get('https://aark-website-b.onrender.com/api/gallery');
//         setGalleryImages(res.data);
//       } catch (err) {
//         console.error('Error fetching gallery images:', err);
//       }
//     };
//     fetchImages();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleImages((prev) => [...prev, entry.target.id]);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { root: null, rootMargin: '0px', threshold: 0.1 }
//     );

//     const images = document.querySelectorAll('.gallery-image');
//     images.forEach((image) => observer.observe(image));

//     return () => {
//       images.forEach((image) => observer.unobserve(image));
//     };
//   }, [galleryImages]);

//   const getCorrectedImageUrl = (url) => {
//     if (!url)
//       return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
//     if (url.includes('localhost') || url.includes('127.0.0.1')) {
//       return url.replace('http://localhost:5000', 'https://aark-website-b.onrender.com');
//     }
//     if (url.startsWith('/uploads')) {
//       return `https://aark-website-b.onrender.com${url}`;
//     }
//     return url;
//   };

//   const scrollLeft = () => {
//     scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   return (
//     <div className="pt-10 overflow-hidden relative">
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="block bg-purple-100 text-purple-700 px-5 py-4 rounded-full text-xl font-semibold mb-4 tracking-wide text-center w-full">
//               Our Gallery
//             </span>
//             {/* <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide text-center w-full">

//             </span> */}
//             <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Explore our state-of-the-art facilities and vibrant campus life through our photo gallery.
//             </p>
//           </div>

//           <div className="relative mb-12">
//             {/* Left Arrow */}
//             <button
//               onClick={scrollLeft}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hover:bg-gray-100"
//             >
//               <FaArrowLeft />
//             </button>

//             {/* Scrollable Gallery */}
//             <div
//               ref={scrollContainerRef}
//               className="flex space-x-6 snap-x snap-mandatory overflow-x-auto px-4 sm:px-6 md:px-8 scroll-smooth scrollbar-hide"
//             >
//               {galleryImages.map((image, index) => (
//                 <div
//                   key={`left-${index}`}
//                   id={`image-${index}`}
//                   className={`gallery-image flex-shrink-0 w-72 snap-center transition-all duration-500 ease-in-out transform ${visibleImages.includes(`image-${index}`)
//                     ? 'opacity-100 translate-y-0'
//                     : 'opacity-0 translate-y-10'
//                     }`}
//                 >
//                   <div className="group relative h-64 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
//                     <img
//                       src={getCorrectedImageUrl(image.imageUrl)}
//                       alt={image.name || 'Our Gallery'}
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src =
//                           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
//                       }}
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                     />


//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="absolute bottom-0 p-4">
//                         {image.category && (
//                           <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full mb-2">
//                             {image.category}
//                           </span>
//                         )}
//                         <h3 className="text-lg font-bold text-white">{image.name}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button
//               onClick={scrollRight}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hover:bg-gray-100"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GalleryView;




import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Inline SVG for Left Arrow (FaArrowLeft equivalent)
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-left"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

// Inline SVG for Right Arrow (FaArrowRight equivalent)
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-right"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Inline SVG for Loading Spinner
const SpinnerIcon = () => (
  <svg
    className="animate-spin h-8 w-8 text-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// Inline SVG for No Images Found
const EmptyGalleryIcon = () => (
  <svg
    className="mx-auto h-16 w-16 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);


export default function GalleryView() {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('https://aark-website-b.onrender.com/api/gallery');
        setImgs(res.data);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth * 0.8, // Scroll by 80% of visible width
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth * 0.8, // Scroll by 80% of visible width
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-purple-100 text-purple-700 p-5 leading-tight">
          Our Gallery
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our state-of-the-art facilities and vibrant campus life through our photo gallery.
        </p>
      </div>

      <div className="relative group"> {/* Added group for button hover visibility */}
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 sm:p-4 rounded-full shadow-lg
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
                     focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
                     hidden md:block" /* Hide on small screens, show on md and up */
          aria-label="Scroll left"
        >
          <ArrowLeftIcon />
        </button>

        {/* Image Scroller Container */}
        {loading ? (
          <div className="flex justify-center items-center h-64 sm:h-80 bg-white rounded-xl shadow-md mx-4 sm:mx-6 lg:mx-8">
            <SpinnerIcon />
            <p className="ml-3 text-lg text-gray-600">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-red-50 border border-red-200 rounded-xl shadow-sm mx-4 sm:mx-6 lg:mx-8">
            <p className="text-red-700 text-lg font-medium">{error}</p>
            <p className="text-red-500 text-sm mt-2">Please check your network connection or try again.</p>
          </div>
        ) : imgs.length === 0 ? (
          <div className="text-center p-8 bg-white border border-gray-200 rounded-xl shadow-sm mx-4 sm:mx-6 lg:mx-8">
            <EmptyGalleryIcon />
            <p className="mt-4 text-lg text-gray-600 font-semibold">No images to display yet.</p>
            <p className="text-gray-500 text-sm mt-1">Check back later or upload new images.</p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto snap-x snap-mandatory
                       px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide" /* Added pb-4 for scrollbar space */
          >
            {imgs.map((i, idx) => (
              <div
                key={idx}
                className="snap-center flex-shrink-0 w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-transform hover:scale-[1.02]"
              >
                <img
                  src={`https://aark-website-b.onrender.com${i.imageUrl}`}
                  alt={i.name || `Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `https://placehold.co/400x400/E5E7EB/6B7280?text=Image+Loading+Failed`; // Placeholder image
                    e.target.alt = "Image not available";
                    e.target.className = "w-full h-full object-contain p-4 bg-gray-200"; // Adjust class for placeholder
                  }}
                />
              </div>
            ))}
            {/* {imgs.map((i, idx) => (
              <div
                key={idx}
                className="snap-center flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                           rounded-xl overflow-hidden shadow-lg border border-gray-200
                           transform transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <img
                  src={`https://aark-website-b.onrender.com${i.imageUrl}`}
                  alt={i.name || `Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = `https://placehold.co/400x400/E5E7EB/6B7280?text=Image+Loading+Failed`; // Placeholder image
                    e.target.alt = "Image not available";
                    e.target.className = "w-full h-full object-contain p-4 bg-gray-200"; // Adjust class for placeholder
                  }}
                />
              </div>
            ))} */}
          </div>
        )}

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 sm:p-4 rounded-full shadow-lg
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
                     focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
                     hidden md:block" /* Hide on small screens, show on md and up */
          aria-label="Scroll right"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
