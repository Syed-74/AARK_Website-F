import React from 'react';

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-transform hover:scale-[1.03]">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
    </div>
  );
};

export default FeatureCard;
