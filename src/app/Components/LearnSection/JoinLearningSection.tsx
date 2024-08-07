import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const JoinLearningSection: FC = () => {
  return (
    <section className="relative bg-[#FACC15] py-56 px-6 lg:px-20 lg:py-80 text-center">
      <div className="container mx-auto relative">
        <h2 className="text-3xl lg:text-6xl font-extrabold text-slate-900 mb-6">
          Join a world of learning
        </h2>
        <p className="text-slate-900 mb-8 text-lg lg:text-xl">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.<br/>
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <Link href="/signup" className="bg-orange-600 text-white px-6 py-4 rounded-md text-lg font-semibold inline-block">
        
            Sign Up Now
        
        </Link>
        <div className="absolute inset-0 flex flex-col justify-center items-center lg:flex-wrap">
          {/* Desktop Images */}
          <Image src="/images/LeftCard.png" alt="Person 1" width={470} height={600} className="hidden lg:block absolute -top-48 left-0 -ml-20" />
          <Image src="/images/RightCard.png" alt="Person 2" width={470} height={600} className="hidden lg:block absolute -top-72 right-0 -mr-20" />

          {/* Mobile Images */}
          <Image src="/images/MobileCardtop.png" alt="Person 1" width={360} height={160} className="lg:hidden absolute -top-52" />
          <Image src="/images/MobileCardbottom.png" alt="Person 2" width={360} height={160} className="lg:hidden absolute top-64" />
        </div>
      </div>
    </section>
  );
};

export default JoinLearningSection;
