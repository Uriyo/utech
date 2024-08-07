import Image from 'next/image';

const ToolsSection = () => {
  return (
    <section className="relative bg-[#F1F5F9] py-14 lg:py-20 px-6 lg:px-20">
      <div className="relative container mx-auto text-left lg:text-center">
        <h2 className="text-2xl lg:text-6xl font-extrabold text-slate-900 mb-4 relative z-20">
          All the{" "}
          <span className="relative inline-block">
            <span className="underline decoration-orange-500">tools</span>
          </span>{" "}
          that you need
        </h2>
        <p className="text-slate-900 lg:leading-[36px] mb-10 lg:px-44 text-sm lg:text-xl relative z-20">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <div className="relative flex justify-center items-center z-20">
          <Image
            src="/images/Desktop.png"
            alt="Main Image"
            width={1100}
            height={640}
            className="mx-auto"
          />
        </div>
        <div className="absolute inset-0 flex flex-row justify-between items-center z-10">
          <Image
            src="/images/rightBlob.png"
            alt="Right Background"
            width={490}
            height={550}
            className="hidden lg:block absolute left-0 top-0 mt-48 ml-3"
          />
          <Image
            src="/images/leftBlob.png"
            alt="Left Background"
            width={423}
            height={600}
            className="hidden lg:pl-16 lg:block absolute -right-20  ml-56 top-0 -mt-10"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-10 lg:-mt-10 flex-wrap lg:flex-nowrap relative z-20">
          <Image
            className="hidden lg:block"
            src="/images/Lines.png"
            alt="Lines"
            width={1030}
            height={450}
          />
          <Image
            className="hidden lg:block"
            src="/images/PcFrame.png"
            alt="PC Frame"
            width={1100}
            height={64}
          />
          <div className="lg:hidden flex flex-col -mt-12 justify-center items-center w-full">
            <Image
              className="-ml-10"
              src="/images/MobileVector.png"
              alt="Mobile Vector"
              width={75}
              height={32}
            />
            <Image
              className="ml-10 "
              src="/images/MobileFrame.png"
              alt="Mobile Frame"
              width={370}
              height={64}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
