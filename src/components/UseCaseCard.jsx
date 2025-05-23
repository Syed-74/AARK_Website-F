import React from 'react';

const UseCaseCard = ({ title, desc }) => {
  return (
    <div className="bg-indigo-50 rounded-xl p-6 text-center border border-indigo-100">
      <h4 className="text-lg font-bold mb-2 text-indigo-800">{title}</h4>
      <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
    </div>
  );
};

export default UseCaseCard;
