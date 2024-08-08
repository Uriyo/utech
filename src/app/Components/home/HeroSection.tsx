import Image from 'next/image';
import Link from 'next/link';
import Header from '../Header';

const HeroSection = () => {
  return (
    <div>
    <section className="bg-white pt-10 py-14 pl-0 lg:px-20">
      <div className='-mt-10'>
      <Header/>
      </div>
      <div className="container pt-8 lg:pt-5 mx-auto px-0 flex flex-col lg:flex-row items-center justify-around">
        <div className="lg:w-1/2 ml-5 lg:mx-0 justify-start  mb-12 lg:mb-0">
          <h1 className="text-4xl font-bold lg:text-7xl lg:font-extrabold text-slate-900 ">
            <span className="underline decoration-orange-500">Teach</span>{" "}
            students <br />
            worldwide
          </h1>
          <p className="mt-4 lg:text-xl font-normal leading-[22.4px] text-base text-left text-slate-900">
            Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
            tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque
            turpis ultricies.
          </p>
          <div className="mt-8 flex flex-row">
            <Link
              href="/"
              className="w-40 bg-orange-600 text-white px-0 py-3 lg:px-6 lg:py-5  text-center font-bold rounded-md mr-4 lg:w-60 lg:text-xl  "
            >
              Sign Up Now
            </Link>
            <Link
              href="/"
              className="text-blue-600 lg:text-lg font-semibold text-sm flex items-center "
            >
              <Image className='ml-5' src="/images/play-circle.png" alt='image play' width={20} height={20}></Image>
              <span className="px-3 text-[16px]">View Demo</span>
            </Link>
          </div>
          <div className="mt-12 flex flex-col lg:flex-row  lg:items-center   gap-2">
            <p className="text-[#475569] text-[16px] mr-10 text-left">
              Trusted by <span className='hidden lg:inline'><br /></span>leading companies
            </p>
            
            <div className='flex flex-row justify-start items-start gap-5 lg:gap-10'>
              <Image
                src="/images/Company4.png"
                alt="trusted"
                className=" cursor-pointer"
                width={25}
                height={30}
              />
              <Image
                src="/images/Company1.png"
                alt="trusted"
                className=" cursor-pointer "
                width={25}
                height={30}
              />
              <Image
                src="/images/Company3.png"
                alt="trusted"
                className=" cursor-pointer"
                width={25}
                height={30}
              />
              <Image
                src="/images/Company2.png"
                alt="trusted"
                className=" cursor-pointer"
                width={25}
                height={30}
              />
              <Image
                src="/images/Company5.png"
                alt="trusted"
                className=" cursor-pointer"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end ">
          <div className="relative">
            <Image
              src="/images/HeroImg.png"
              alt="Teaching"
              width={625}
              height={545}
              className="p-4 lg:p-0"
            />
            {/* <Image src="/images/HeroImg.png" alt="Student" width={500} height={500} className="lg:hidden absolute bottom-0 right-0 rounded-full" /> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
