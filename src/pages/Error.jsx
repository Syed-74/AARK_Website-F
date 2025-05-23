import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-white px-4 py-12 text-center">
      <FaExclamationTriangle className="text-yellow-400 text-7xl mb-6 animate-bounce" />
      <h1 className="text-8xl font-extrabold text-green-700 mb-2 drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
        Sorry, the page you are looking for does not exist or has been moved.<br />
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition text-xl"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;