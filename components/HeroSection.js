import Navbar from "./Navbar";

const HeroSection = () => {
  const imageStyle = {
    backgroundImage:
      "url(https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    maxHeight: "80vh",
    width: "100%",
    objectFit: "contain",
  };
  return (
    <>
      <div
        className="w-100% h-screen object-contain relative"
        style={imageStyle}
      >
        <Navbar />
        <div className="absolute top-2/4 left-1/2 -ml-32 flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">Not sure where to go?Perfect</p>
          <button className="mt-4 bg-white w-2/3 py-4 font-semibold text-button px-8 cursor-pointer rounded-full shadow-md hover:shadow-xl transition-all duration-150">
            Im flexible
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
