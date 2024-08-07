// components/Card.tsx
import Link from 'next/link';
import React from 'react';

interface CardProps {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ tag, tagColor, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 pb-3 lg:p-4 relative z-10">
      <span className={`inline-block px-2 py-1 rounded text-sm ${tagColor}`}>{tag}</span>
      <h3 className="text-sm lg:text-xl font-bold text-gray-900 mt-2">{title}</h3>
      <p className="text-gray-700 text-xs lg:text-sm mt-2">{description}</p>
      <div className='flex items-center justify-center'>
      <Link href={link} className=" text-blue-600 border-2 ml-1 py-2 px-7 lg:px-10 justify-center items-center text-center rounded-md border-blue-600 mt-4 inline-block text-sm">
        Take Lesson
      </Link>
      </div>
    </div>
  );
};

export default Card;
