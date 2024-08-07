// components/CoolFeaturesSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../Card';


const CoolFeaturesSection: React.FC = () => {
  return (
    <section className="relative bg-white w-full py-14 pb-44 px-6 lg:px-20 lg:pt-16 lg:pb-56">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl lg:text-6xl font-bold text-gray-900 mb-4">
            All the{" "}
            <span className="relative inline-block underline decoration-orange-500">
              cool features
            </span>
          </h2>
          <p className="text-gray-700 mb-6 lg:text-lg font-normal leading-[36px]">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </p>
          <Link href="/" className="text-blue-600 font-semibold">
            View all the features &rarr;
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-32">
          <div className="absolute  top-0  w-full h-full lg:w-auto lg:h-auto z-10 -right-28 lg:right-0">
            <Image
              src="/images/BgImg.png"
              alt="Background Blob"
              width={500}
              height={400}
              className="hidden lg:block lg:mr-14 lg:mt-9 z-20 lg:w-[700px] lg:h-auto w-[500px] "
            />
          </div>
          <div className="relative  z-20 mb-4 w-2/3 lg:w-1/3 -ml-12 lg:ml-12 lg:pt-24 lg:mb-8">
            <Image
              src="/images/BgImg.png"
              alt="Background Blob"
              width={1100}
              height={400}
              className="z-10 sm: lg:hidden lg:h-auto  absolute max-w-[195%] sm:max-w-[140%] sm:mb-60 "
            />

            <div className="p-4 -ml-10 mt-5 mr-7 lg:-mt-3 lg:-mr-5 ">
              <Card
                tag="Popular"
                tagColor="bg-blue-200 text-blue-700"
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementum ultricies gfgd volutpat sit non."
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoolFeaturesSection;
