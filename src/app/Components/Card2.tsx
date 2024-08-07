import React from 'react';
import Image from 'next/image';

interface Card2Props {
  content: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Card2: React.FC<Card2Props> = ({ content, name, title, imageSrc }) => {
  return (
    <div className="bg-white p-6 mb-10 rounded-3xl shadow-lg w-80 lg:w-96 h-80 flex-shrink-0">
      <p className="text-gray-700 text-lg mb-6">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
          <Image src={imageSrc} alt={name} width={48} height={48} className="rounded-full object-cover" />
        </div>
        <div>
          <p className="text-gray-900 text-lg font-semibold">{name}</p>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
