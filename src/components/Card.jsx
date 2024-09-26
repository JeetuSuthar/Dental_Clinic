import React from 'react';

function Card({ subject, image, para }) {
  return (
    <div className=" rounded-3xl overflow-hidden shadow-2xl bg-white transform hover:scale-105 transition-transform duration-300">
      <img className="w-4/5 h-40 mx-auto object-contain" src={image} alt={subject} />
      <div className="px-4 py-4">
        <div className="font-bold text-2xl mb-2 text-center">{subject}</div>
        <p className="text-gray-700 text-base text-center">{para}</p>
      </div>
    </div>
  );
}

export default Card;
