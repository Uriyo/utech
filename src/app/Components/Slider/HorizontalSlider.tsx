"use client"

import React, { useRef } from 'react';
import Card2 from '../Card2';
import Image from 'next/image';

const HorizontalSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      content: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      title: "Financial Counselor",
      imageSrc: "/images/thumb1.jpeg"
    },
    {
      content: "Odio rhoncus ornare rhoncus ornare ut quam. Molestie rhoncus ornare vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultrices neque, hac ultricies dolor.",
      name: "Ralph Edwards",
      title: "Math Teacher",
      imageSrc: "/images/thumb2.jpeg"
    },
    {
      content: "Sagittis nunc egestas leo et malesuada  rhoncus ornare urna risus. Morbi proin  rhoncus ornareet cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
      name: "Hellena John",
      title: "Psychology Student",
      imageSrc: "/images/thumb3.jpeg"
    },
    {
      content: "Sapien, sollicitudin rhoncus ornare et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
      name: "Ellena John",
      title: "Psychology Student",
      imageSrc: "/images/thumb4.jpeg"
    },
    {
        content: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        name: "Hellen Jummy",
        title: "Financial Counselor",
        imageSrc: "/images/thumb1.jpeg"
    },
    {
        content: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        name: "Hellen Jummy",
        title: "Financial Counselor",
        imageSrc: "/images/thumb1.jpeg"
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14 px-6 lg:px-20 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">What everyone says</h2>
          <div className="hidden lg:flex space-x-4">
            <button
              onClick={scrollLeft}
              className="rounded-full"
            >
              <Image src="/images/leftbtn.png" alt="Left Arrow" width={48} height={48} />
            </button>
            <button
              onClick={scrollRight}
              className="rounded-full"
            >
              <Image src="/images/rightbtn.png" alt="Right Arrow" width={48} height={48} />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide" ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <Card2
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                title={testimonial.title}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
