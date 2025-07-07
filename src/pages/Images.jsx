// import React, { useState } from 'react';
// import axios from 'axios';

// const AddImage = ({ onUploadSuccess }) => {
//   const [imageName, setImageName] = useState('');

//   const handleUpload = async (e) => {
//     const files = e.target.files;
//     for (let file of files) {
//       const formData = new FormData();
//       formData.append('image', file);
//       formData.append('name', imageName || file.name);

//       try {
//         const res = await axios.post('https://aark-website-b.onrender.com/api/gallery/add', formData);
//         if (onUploadSuccess) onUploadSuccess(res.data); // callback to refresh gallery
//         setImageName('');
//       } catch (err) {
//         console.error('Upload failed:', err);
//       }
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold text-green-700 mb-4">Add Image</h2>
//       <form className="grid gap-4 sm:grid-cols-2">
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Image Title</label>
//           <input
//             type="text"
//             value={imageName}
//             onChange={(e) => setImageName(e.target.value)}
//             placeholder="Enter image name"
//             className="w-full border px-3 py-2 rounded text-sm"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium text-gray-700">Upload</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleUpload}
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// const Images = () => {
//   const [message, setMessage] = useState('');

//   const handleUploadSuccess = (data) => {
//     setMessage('Image uploaded successfully!');
//     // Optionally, refresh gallery images here
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 pt-24">
//       <AddImage onUploadSuccess={handleUploadSuccess} />
//       {message && <p className="mt-6 text-center text-blue-600 text-lg">{message}</p>}
//     </div>
//   );
// };

// export default Images; 




import React from 'react'

const Images = () => {
  return (
    <div>
      <h1>hello </h1>
    </div>
  )
}

export default Images








// import React, { useState } from 'react';
// import axios from 'axios';

// const Images = () => {
//   const [imageData, setImageData] = useState({
//     name: '',
//     image: null,
//   });

//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setImageData({ ...imageData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     setImageData({ ...imageData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     const formData = new FormData();
//     formData.append('name', imageData.name);
//     formData.append('image', imageData.image);

//     try {
//       const res = await axios.post('https://sups-backend.onrender.com/api/gallery/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage('Image uploaded successfully!');
//       setImageData({ name: '', image: null });
//     } catch (error) {
//       console.error('Upload failed:', error);
//       setMessage('Failed to upload image.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 pt-24">
//       <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Image to Gallery........</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 text-gray-700">Image Name</label>
//             <input
//               type="text"
//               name="name"
//               value={imageData.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
//               placeholder="Enter name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-gray-700">Select Image</label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
//           >
//             {loading ? 'Uploading...' : 'Upload'}
//           </button>
//         </form>
//         {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Images;
