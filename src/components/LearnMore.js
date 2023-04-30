import React from 'react';
import { Link } from 'react-router-dom';

function LearnMore() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <p className="text-lg mb-8 max-w-xl text-center">
        Our platform is a marketplace that connects donors with environmental organizations. Our mission is to make it easier for individuals and companies to support environmental causes and make a positive impact on our planet.
      </p>
      <p className="text-lg mb-8 max-w-xl text-center">
        We partner with a wide range of environmental organizations, from local grassroots groups to international non-profits. Our platform provides donors with the tools they need to discover and support these organizations, including a comprehensive directory of environmental organizations and a streamlined donation process.
      </p>
      <p className="text-lg mb-8 max-w-xl text-center">
        In addition to supporting environmental organizations, our platform also provides resources and information for individuals who want to learn more about environmental issues and take action in their communities. We believe that by working together, we can create a more sustainable future for our planet and all its inhabitants.
      </p>
      <Link to="/donorregistration">
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
        Join The Movement
      </button>
      </Link>
    </div>
  );
}

export default LearnMore;
