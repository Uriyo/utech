// components/MobileView.tsx
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Card from '../Card'; // Ensure the correct import path

const MobileView: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 pl-6 space-y-6 bg-white">
      <div className="text-left w-full">
        <h1 className="text-2xl font-bold">
          An <span className="underline decoration-orange-500">all-in-one</span>{" "}
          app that makes it easier
        </h1>
        <p className="mt-2 text-gray-600">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
      </div>

      <ul className="mt-4 space-y-2 w-full text-left">
        <li className="flex items-center justify-center text-lg">
          <span className="mr-2 text-gray-600">✔</span> Est in pharetra magna
          adipiscing ornare aliquam.
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-2 text-gray-600">✔</span> Tellus arcu sed
          consequat ac velit ut eu blandit.
        </li>
        <li className="flex items-center text-lg">
          <span className="mr-2 text-gray-600">✔</span> Ullamcorper ornare in et
          egestas dolor orci.
        </li>
      </ul>

      <div className="w-full text-left">
        <Link
          href="#"
          className="flex font-semibold items-center text-blue-500 hover:underline"
        >
          Find more about the app
          <Image
            src="/images/arrow-right.png"
            alt="arrow"
            width={20}
            height={10}
          />
        </Link>
      </div>

      <div className=" w-full pt-10 mb-0">
        <div className="absolute -left-4 w-full">
          <Image
            src="/images/Blob1.png"
            alt="Blob"
            width={200}
            height={200}
            className="w-1/2 max-w-screen-md"
          />
        </div>
        <div className="overflow-hidden w-full flex justify-center">
          <Image
            src="/images/DesktopImg.png"
            alt="Main Image"
            width={900}
            height={400}
            className="relative z-10 w-full max-w-screen-md"
          />
        </div>

        <div className="absolute w-full flex flex-col items-center -mt-20 pr-4 z-20">
          <div className="flex w-full space-x-2 justify-center">
            <Card
              tag="Featured"
              tagColor="bg-purple-100 text-purple-500"
              title="The map of mathematics"
              description="Egestas elit dui ultrices scelerisque ut eu purus aliquams aliquam ultrices vitae habitasse."
              link="#"
            />
            <Card
              tag="Popular"
              tagColor="bg-blue-100 text-blue-500"
              title="Design for how people think"
              description="Aliquam et euismod condimentum elementum ultrices ultrices ultrices volutpat sit non."
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
