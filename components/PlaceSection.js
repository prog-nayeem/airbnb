import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PlaceSection = ({ guest, location, formate, data }) => {
  return (
    <>
      <div>
        <div>
          <p className="text-sm text-opacity-70">
            95+ stays - {formate} for
            {guest > 0 && guest} Guest
          </p>
          <h1 className="text-3xl font-semibold mt-2">Stays in {location}</h1>
        </div>
        <div className="mt-6 space-x-4">
          <button className="btn">Type of place</button>
          <button className="btn">Price</button>
          <button className="btn">InstantBook</button>
          <button className="btn">Rooms and beds</button>
          <button className="btn hidden md:inline-flex">More filters</button>
        </div>
        <div className="mt-4 mb-3">
          <p className="text-sm">
            Review COVID-19 travel restrictions before you book.
            <span className="cursor-pointer text-blue-500">Learn more</span>
          </p>
        </div>
        <hr />
        {data.map(
          ({ img, location, title, description, star, price, total, long }) => (
            <div
              className="flex space-x-3 border-b-2 cursor-pointer hover:bg-gray-50 border-gray-100 py-4 "
              key={long}
            >
              <div className="relative w-72 h-48 flex-shrink-0">
                <Image
                  src={img}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="opacity-60 text-base">{location}</h2>
                    <p className="text-xl">{title}</p>
                  </div>
                  <span className="p-3 hover:bg-red-400 hover:text-white rounded-full cursor-pointer">
                    <FavoriteBorderIcon />
                  </span>
                </div>
                <div>
                  <p className="text-sm opacity-60 w-60">{description}</p>
                </div>
                <div className="flex justify-between pr-2 items-end">
                  <p className="flex items-center">
                    <AiFillStar className="text-red-400 mr-1 text-xl" /> {star}
                  </p>
                  <div>
                    <p className="text-lg">{price}</p>
                    <p className="opacity-50 text-sm underline">{total}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        <Stack className=" mt-6  items-center" spacing={2}>
          <Pagination
            count={10}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </>
  );
};

export default PlaceSection;
