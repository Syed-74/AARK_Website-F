import React, { useState } from 'react';
import axios from 'axios';

const AddImage = ({ onUploadSuccess }) => {
  const [imageName, setImageName] = useState('');

  const handleUpload = async (e) => {
    const files = e.target.files;
    for (let file of files) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('name', imageName || file.name);

      try {
        const res = await axios.post('http://localhost:5000/api/gallery/add', formData);
        if (onUploadSuccess) onUploadSuccess(res.data); // callback to refresh gallery
        setImageName('');
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Add Image</h2>
      <form className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Image Title</label>
          <input
            type="text"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            placeholder="Enter image name"
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Upload</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>
      </form>
    </div>
  );
};

const Images = () => {
  const [message, setMessage] = useState('');

  const handleUploadSuccess = (data) => {
    setMessage('Image uploaded successfully!');
    // Optionally, refresh gallery images here
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <AddImage onUploadSuccess={handleUploadSuccess} />
      {message && <p className="mt-6 text-center text-blue-600 text-lg">{message}</p>}
    </div>
  );
};

export default Images; 