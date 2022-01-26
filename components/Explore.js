import Image from "next/image";

const Explore = ({ fatchExploreData }) => {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Explore Nearby</h1>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:grid-rows-3 xl:grid-rows-2 gap-y-4">
          {fatchExploreData?.map(({ distance, img, location }) => (
            <div
              key={distance}
              className="flex mr-6 items-center space-x-4 transition-all duration-150 ease-out cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-110 transform"
            >
              <div className="relative w-20 h-16 flex-shrink-0">
                <Image src={img} alt="" layout="fill" className="rounded-lg " />
              </div>

              <div>
                <p className="font-semibold">{location}</p>
                <p className="text-sm opacity-50">{distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
