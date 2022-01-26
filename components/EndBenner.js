import Image from "next/image";
const EndBenner = () => {
  return (
    <>
      <div className="mt-8 mb-32">
        <div className="relative w-100% h-72 md:h-96 object-cover ">
          <Image
            src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg"
            layout="fill"
            className="rounded-xl"
            alt=""
          />
          <div className="absolute top-12 md:top-20 left-12 md:left-20 text-gray-200">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Try hosting
            </h1>
            <p className="text-sm md:text-base mt-3 md:mt-6">
              Earn extra income and unlock new opportunities
              <br /> by sharing your space
            </p>
            <button className="mt-4 md:mt-7 bg-gray-200 px-3 py-2 md:px-5 md:py-3 font-semibold rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndBenner;
