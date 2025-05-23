import React, { useState } from "react";
import axios from "axios";

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/consultation", formData);
      alert("Consultation request submitted successfully.");
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit consultation request.");
    }
  };

  if (!isOpen) return null; 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Schedule a Consultation
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required />
          <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required />
          <select name="gender" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select name="englishProficiency" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required>
            <option value="">English Proficiency</option>
            <option>Basic</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Fluent</option>
          </select>
          <div className="md:col-span-2">
            <select name="referral" onChange={handleChange} className="w-full border rounded-lg px-4 py-2" required>
              <option value="">How did you hear about us?</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Friend/Family</option>
              <option>Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit Consultation Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;

















{/* <div>
<label className="block text-sm font-medium mb-1">State</label>
<select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" required>
    <option value="">Please Select</option>
</select>
</div> */}


{/* <div>
<label className="block text-sm font-medium mb-1">Program of Interest*</label>
<select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" required>
    <option value="">Please Select</option>
</select>
</div> */}