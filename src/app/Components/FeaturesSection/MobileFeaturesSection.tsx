import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from '../Card';

const MobileFeaturesSection: React.FC = () => {
  return (
    <div className="p-4 ml-2 max-w-sm">
      <div className='mb-28'>
        <h2 className="text-2xl font-bold text-left">
          All the cool{" "}
          <span className="underline decoration-orange-400">features</span>
        </h2>
        <p className="text-gray-700 mt-2 font-normal leading-[22.4px]">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullgiat cras ullgiat cras ullgiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <Link href="#" className="text-blue-600 font-semibold mt-6 inline-block">
          View all the features →
        </Link>
      </div>

      <div className="mt-8 mx-auto">
        {/* <div className="bg-white shadow-md ml-5 mr-16 p-4 rounded-lg relative">
          <span className="bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded absolute top-2 left-2">Popular</span>
          <h3 className="text-lg font-bold mt-6">Design for how people think</h3>
          <p className="text-gray-600 mt-2">Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Take Lesson</button>
        </div> */}
        <div className='p-4 pr-10 -ml-6 px-10 w-5/6'>
          <Card
            tag="Popular"
            tagColor="bg-blue-200 text-blue-700"
            title="Design for how people think"
            description="Agestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            link="#"
          />
        </div>
        <div className="-mt-[315px] -mr-52 flex justify-center ">
          <Image
            src="/images/BgImg.png"
            width={900}
            height={100}
            alt="Image 1"
            className=""
          />
          {/* <img src="image2-url.jpg" alt="Image 2" className="w-24 h-24 rounded-lg"/> */}
        </div>
      </div>
    </div>
  );
};

export default MobileFeaturesSection;
