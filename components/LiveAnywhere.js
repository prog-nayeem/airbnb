import Image from "next/image";
const LiveAnywhere = ({ fatchingCartData }) => {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Live Anywhere</h2>
        <div className="mt-10 flex space-x-3 overflow-x-scroll scrollbar-hide p-2 -ml-2">
          {fatchingCartData?.map(({ img, title }, index) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-105 transform transition-all duration-200"
            >
              <div className="relative w-64 h-56 md:w-96 md:h-80">
                <Image src={img} alt="" layout="fill" className="rounded-xl" />
              </div>
              <p className="text-lg font-semibold mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LiveAnywhere;
