import Image from 'next/image';
import Link from 'next/link';

const MeetSection: React.FC = () => {
  return (
    <div>
      <section className="bg-white py-20 px-6 lg:pb-28 lg:-pt-20 -mt-40   lg:px-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Image src="/images/Col.png" alt="Student 1" width={600} height={650} className="rounded-md" />
          </div>
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl lg:text-6xl font-extrabold text-slate-900 mb-6">
              Meet international
              <Image
                src="/images/plane-departure.png"
                alt="Plane Departure Icon"
                width={64}
                height={64}
                className="inline-block -ml-14 -mt-12 lg:-ml-20 lg:-mt-24 p-4 lg:p-0"
              /> 
              <br />
              students & teachers
            </h2>
            <p className="text-slate-700 mb-8 text-[16px] font-normal leading-[22.4px] text-left sm:text-[20px] sm:leading-[36px]">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. 
              {/* <br /> */}
              Placera ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
            </p>
            <Link href="/explore" className="text-blue-600 text-lg font-semibold lg:text-xl inline-flex items-center">
              
                Explore teachers and students
                <Image 
                  src="/images/arrow-right.png" 
                  alt="Arrow Right" 
                  width={20} 
                  height={20} 
                  className="ml-2"
                />
              
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-slate-900 py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 text-center text-white">
          <div className="py-4 flex flex-col items-center  text-yellow-400">
            <Image src="/images/Icon1.png" alt="User Countries Icon" width={64} height={64} className="rounded-md pb-4" />
            <h3 className="text-5xl lg:text-7xl font-bold">195</h3>
            <p className="mt-2 text-sm lg:text-2xl">user countries</p>
          </div>
          <div className="py-4 flex flex-col items-center text-yellow-400">
            <Image src="/images/Icon2.png" alt="Valued Teachers Icon" width={64} height={64} className="rounded-md pb-4" />
            <h3 className="text-5xl lg:text-7xl font-bold">1M</h3>
            <p className="mt-2 text-sm lg:text-2xl">valued teachers</p>
          </div>
          <div className="py-4 flex flex-col items-center text-yellow-400">
            <Image src="/images/Icon3.png" alt="Happy Students Icon" width={64} height={64} className="rounded-md pb-4" />
            <h3 className="text-5xl lg:text-7xl font-bold">17M</h3>
            <p className="mt-2 text-sm lg:text-2xl">happy students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetSection;
