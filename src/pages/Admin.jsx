// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Admin = () => {
//   const [imageName, setImageName] = useState('');
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [galleryImages, setGalleryImages] = useState([]);

//   // Load existing images
//   const fetchImages = async () => {
//     try {
//       const res = await axios.get('https://aark-website-b.onrender.com/api/gallery');
//       setGalleryImages(res.data);
//     } catch (err) {
//       console.error('Error loading gallery:', err);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const handleFileChange = (e) => {
//     setSelectedFiles(Array.from(e.target.files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     if (selectedFiles.length === 0) {
//       setMessage('Please select at least one image.');
//       setLoading(false);
//       return;
//     }

//     try {
//       for (let file of selectedFiles) {
//         const formData = new FormData();
//         formData.append('image', file);
//         formData.append('name', imageName || file.name);
//         await axios.post('https://aark-website-b.onrender.com/api/gallery/add', formData);
//       }
//       setMessage('Image(s) uploaded successfully!');
//       setImageName('');
//       setSelectedFiles([]);
//       fetchImages(); // Refresh image list
//     } catch (err) {
//       setMessage('Upload failed.');
//       console.error('Upload failed:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this image?");
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`https://aark-website-b.onrender.com/api/gallery/${id}`);
//       setGalleryImages((prev) => prev.filter((img) => img._id !== id));
//     } catch (err) {
//       console.error('Delete failed:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-2">
//       <div className="bg-white rounded-xl shadow p-6 max-w-2xl w-full mx-auto">
//         <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Add Image</h2>
//         <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
//           <div className="col-span-2 sm:col-span-1">
//             <label className="block mb-1 font-medium text-gray-700">Image Title</label>
//             <input
//               type="text"
//               value={imageName}
//               onChange={(e) => setImageName(e.target.value)}
//               placeholder="Enter image name"
//               className="w-full border px-3 py-2 rounded text-sm focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div className="col-span-2 sm:col-span-1">
//             <label className="block mb-1 font-medium text-gray-700">Upload</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
//             />
//           </div>
//           <div className="col-span-2 flex justify-center mt-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition w-full sm:w-auto"
//             >
//               {loading ? 'Uploading...' : 'Upload'}
//             </button>
//           </div>
//         </form>
//         {message && <p className="mt-4 text-center text-blue-600 text-sm">{message}</p>}
//       </div>

//       {/* Gallery Images */}
//       <div className="bg-white rounded-xl shadow p-6 max-w-6xl w-full mx-auto mt-8">
//         <h2 className="text-xl font-bold text-green-700 mb-4">Uploaded Images</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {galleryImages.length === 0 && (
//             <div className="col-span-full text-gray-400 text-center">No images uploaded yet.</div>
//           )}
//           {galleryImages.map((img) => (
//             <div key={img._id} className="relative border rounded overflow-hidden shadow hover:shadow-lg">
//               <img
//                 src={img.imageUrl}
//                 alt={img.name}
//                 className="w-full h-32 object-cover"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";
//                 }}
//               />
//               <div className="p-2 text-xs text-gray-700 truncate">{img.name}</div>
//               <button
//                 onClick={() => handleDelete(img._id)}
//                 className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Inline SVG for loading spinner
const SpinnerIcon = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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

// Inline SVG for placeholder/error image
const ImageIcon = () => (
  <svg
    className="h-16 w-16 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// Inline SVG for close/delete icon
const XCircleIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);


export default function Admin() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [imgs, setImgs] = useState([]);
  const [msg, setMsg] = useState('');
  const [uploading, setUploading] = useState(false); // Renamed loading to uploading for clarity
  const [fetching, setFetching] = useState(true); // New state for initial fetch loading

  const fetchImages = async () => {
    setFetching(true); // Set fetching to true when starting to fetch
    try {
      const res = await axios.get('https://aark-website-b.onrender.com/api/gallery');
      setImgs(res.data);
    } catch (err) {
      setMsg('Failed to fetch images.');
      console.error('Fetch error:', err);
    } finally {
      setFetching(false); // Set fetching to false after fetch completes
    }
  };

  useEffect(() => {
    fetchImages();
  }, []); // Empty dependency array means this runs once on mount

  const upload = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setMsg('Please select at least one image to upload.');
      return;
    }
    setUploading(true); // Set uploading to true
    setMsg(''); // Clear previous messages
    try {
      for (let f of files) {
        const fd = new FormData();
        fd.append('image', f);
        fd.append('name', name || f.name); // Use file name if title is empty
        await axios.post('https://aark-website-b.onrender.com/api/gallery/add', fd);
      }
      setMsg('Images uploaded successfully!');
      setFiles([]); // Clear selected files
      setName(''); // Clear title input
      fetchImages(); // Refresh the image list
    } catch (err) {
      setMsg('Upload failed. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false); // Set uploading to false
    }
  };

  const del = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;
    try {
      await axios.delete(`https://aark-website-b.onrender.com/api/gallery/${id}`);
      setImgs(imgs.filter(i => i._id !== id)); // Remove deleted image from state
      setMsg('Image deleted successfully!');
    } catch (err) {
      setMsg('Failed to delete image. Please try again.');
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Upload Form Section */}
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Upload New Images</h2>
        <form onSubmit={upload} className="grid gap-5">
          <div>
            <label htmlFor="image-name" className="sr-only">Image Title</label>
            <input
              id="image-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter image title (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="file-upload" className="sr-only">Select Files</label>
            <input
              id="file-upload"
              type="file"
              multiple
              onChange={e => setFiles(Array.from(e.target.files))}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100 focus:outline-none focus:ring-0
                transition duration-150 ease-in-out cursor-pointer"
            />
            {files.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {files.length} file(s) {files.map(f => f.name).join(', ')}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={uploading}
            className={`
              w-full py-2 px-4 rounded-md font-semibold text-white transition duration-150 ease-in-out
              flex items-center justify-center
              ${uploading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}
            `}
          >
            {uploading ? (
              <>
                <SpinnerIcon /> Uploading...
              </>
            ) : (
              'Upload Images'
            )}
          </button>
          {msg && (
            <p className={`text-center text-sm ${msg.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {msg}
            </p>
          )}
        </form>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Image Gallery</h2>

        {fetching ? (
          <div className="flex justify-center items-center h-48">
            <SpinnerIcon /> <span className="ml-3 text-gray-600 text-lg">Loading images...</span>
          </div>
        ) : imgs.length === 0 ? (
          <div className="text-center p-8 border border-gray-300 rounded-lg bg-white shadow-sm">
            <ImageIcon />
            <p className="mt-4 text-lg text-gray-600">No images found. Upload some to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {imgs.map(i => (
              <div key={i._id} className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <img
                  src={`https://aark-website-b.onrender.com${i.imageUrl}`}
                  alt={i.name}
                  className="w-full h-32 sm:h-40 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop if fallback also fails
                    e.target.src = 'https://via.placeholder.com/150/F3F4F6/9CA3AF?text=Image+Not+Found'; // Fallback to a placeholder
                    e.target.alt = "Image not available";
                    e.target.className += " p-4"; // Add padding to placeholder
                  }}
                />
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800 truncate" title={i.name}>
                    {i.name || 'Untitled Image'}
                  </p>
                </div>
                <button
                  onClick={() => del(i._id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1  rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                  aria-label={`Delete ${i.name || 'image'}`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Admin = () => {
//   const [imageName, setImageName] = useState('');
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [galleryImages, setGalleryImages] = useState([]);

//   // Load existing images
//   const fetchImages = async () => {
//     try {
//       const res = await axios.get('https://aark-website-b.onrender.com/api/gallery');
//       setGalleryImages(res.data);
//     } catch (err) {
//       console.error('Error loading gallery:', err);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const handleFileChange = (e) => {
//     setSelectedFiles(Array.from(e.target.files));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     setLoading(true);

//     if (selectedFiles.length === 0) {
//       setMessage('Please select at least one image.');
//       setLoading(false);
//       return;
//     }

//     try {
//       for (let file of selectedFiles) {
//         const formData = new FormData();
//         formData.append('image', file);
//         formData.append('name', imageName || file.name);
//         await axios.post('https://aark-website-b.onrender.com/api/gallery/add', formData);
//       }
//       setMessage('Image(s) uploaded successfully!');
//       setImageName('');
//       setSelectedFiles([]);
//       fetchImages(); // Refresh image list
//     } catch (err) {
//       setMessage('Upload failed.');
//       console.error('Upload failed:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this image?");
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(`https://aark-website-b.onrender.com/api/gallery/${id}`);
//       setGalleryImages((prev) => prev.filter((img) => img._id !== id));
//     } catch (err) {
//       console.error('Delete failed:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">

//       {/* Upload Section */}
//       <div className="bg-white rounded-xl shadow p-6 max-w-2xl w-full mx-auto">
//         <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Add Image</h2>
//         <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
//           <div className="col-span-2 sm:col-span-1">
//             <label className="block mb-1 font-medium text-gray-700">Image Title</label>
//             <input
//               type="text"
//               value={imageName}
//               onChange={(e) => setImageName(e.target.value)}
//               placeholder="Enter image name"
//               className="w-full border px-3 py-2 rounded text-sm focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div className="col-span-2 sm:col-span-1">
//             <label className="block mb-1 font-medium text-gray-700">Upload</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleFileChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
//             />
//           </div>
//           <div className="col-span-2 flex justify-center mt-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition w-full sm:w-auto"
//             >
//               {loading ? 'Uploading...' : 'Upload'}
//             </button>
//           </div>
//         </form>
//         {message && <p className="mt-4 text-center text-blue-600 text-sm">{message}</p>}
//       </div>

//       {/* Gallery Section */}
//       <div className="bg-white rounded-xl shadow p-6 max-w-6xl w-full mx-auto mt-8">
//         <h2 className="text-xl font-bold text-green-700 mb-4">Uploaded Images</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {galleryImages.length === 0 && (
//             <div className="col-span-full text-gray-400 text-center">No images uploaded yet.</div>
//           )}
//           {galleryImages.map((img) => (
//             <div key={img._id} className="relative border rounded overflow-hidden shadow hover:shadow-lg transition">
//               <img
//                 src={img.imageUrl}
//                 alt={img.name}
//                 className="w-full h-32 object-cover"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png";
//                 }}
//               />
             

//               <div className="p-2 text-xs text-gray-700 truncate">{img.name}</div>
//               <button
//                 onClick={() => handleDelete(img._id)}
//                 className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;









// import React, { useState } from 'react';
// import { FaBars, FaUserCircle, FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt, FaImages } from 'react-icons/fa';

// const navLinks = [
//   { name: 'Dashboard', icon: <FaTachometerAlt />, section: 'dashboard' },
//   { name: 'Users', icon: <FaUsers />, section: 'users' },
//   { name: 'Settings', icon: <FaCog />, section: 'settings' },
//   { name: 'Gallery', icon: <FaImages />, section: 'gallery' },
// ];

// const Admin = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedSection, setSelectedSection] = useState('dashboard');
//   const [galleryImages, setGalleryImages] = useState([]);

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map(file => ({
//       url: URL.createObjectURL(file),
//       name: file.name
//     }));
//     setGalleryImages(prev => [...prev, ...newImages]);
//   };

//   // Main content for each section
//   const renderSection = () => {
//     if (selectedSection === 'dashboard') {
//       return (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             {/* Example widgets */}
//             <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
//               <span className="text-3xl font-bold text-green-700">120</span>
//               <span className="text-gray-500 mt-2">Total Users</span>
//             </div>
//             <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
//               <span className="text-3xl font-bold text-green-700">8</span>
//               <span className="text-gray-500 mt-2">Active Projects</span>
//             </div>
//             <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
//               <span className="text-3xl font-bold text-green-700">3</span>
//               <span className="text-gray-500 mt-2">Pending Requests</span>
//             </div>
//           </div>
//           {/* Placeholder for more dashboard content */}
//           <div className="bg-white rounded-xl shadow p-6 mt-6 min-h-[200px] flex items-center justify-center text-gray-400 text-lg">
//             More dashboard widgets or charts can go here.
//           </div>
//         </>
//       );
//     }
//     if (selectedSection === 'gallery') {
//       return (
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-2xl font-bold text-green-700 mb-4">Gallery Management</h2>
//           <form className="mb-6">
//             <label className="block mb-2 font-medium text-gray-700">Upload Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={handleImageUpload}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
//             />
//           </form>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {galleryImages.length === 0 && (
//               <div className="col-span-full text-gray-400 text-center">No images uploaded yet.</div>
//             )}
//             {galleryImages.map((img, idx) => (
//               <div key={idx} className="rounded-lg overflow-hidden border shadow hover:shadow-lg transition">
//                 <img src={img.url} alt={img.name} className="w-full h-32 object-cover" />
//                 <div className="p-2 text-xs text-gray-600 truncate">{img.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     }
//     // Placeholder for other sections
//     return (
//       <div className="bg-white rounded-xl shadow p-6 min-h-[200px] flex items-center justify-center text-gray-400 text-lg">
//         {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)} section coming soon.
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:w-64`}>
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <span className="text-xl font-bold text-green-700">Admin Panel</span>
//           <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
//             <FaBars className="w-6 h-6" />
//           </button>
//         </div>
//         <nav className="mt-6">
//           {navLinks.map((link) => (
//             <button
//               key={link.name}
//               onClick={() => { setSelectedSection(link.section); setSidebarOpen(false); }}
//               className={`flex items-center px-6 py-3 w-full text-left transition font-medium ${selectedSection === link.section ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}`}
//             >
//               <span className="mr-3 text-lg">{link.icon}</span>
//               {link.name}
//             </button>
//           ))}
//           <a
//             href="/"
//             className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-100 hover:text-red-600 w-full transition font-medium mt-8"
//           >
//             <FaSignOutAlt className="mr-3 text-lg" /> Logout
//           </a>
//         </nav>
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main content */}
//       <div className="flex-1 flex flex-col min-h-screen md:ml-64">
//         {/* Header */}
//         <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-10">
//           <div className="flex items-center gap-3">
//             <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
//               <FaBars className="w-6 h-6 text-green-700" />
//             </button>
//             <h1 className="text-2xl font-bold text-green-700 capitalize">{selectedSection}</h1>
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="text-gray-700 font-medium">Admin</span>
//             <FaUserCircle className="w-8 h-8 text-green-700" />
//           </div>
//         </header>
//         {/* Main Dashboard Content */}
//         <main className="flex-1 p-6">
//           {renderSection()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Admin;