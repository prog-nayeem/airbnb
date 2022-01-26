import Image from "next/image";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/dist/client/router";
import NevMenu from "./NevMenu";
import { useDispatch } from "react-redux";
import GuestList from "./GuestList";
import { useCastomHook } from "./context/Context";
import ClanderMenu from "./ClanderMenu";

const Navbar = ({ placeholder, guest, isColord }) => {
  const [showBackground, setShowBackground] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    user,
    clanderOpen,
    signInOpen,
    guestOpen,
    totalGuest,
    setTotalGuest,
    startDate,
    endDate,
  } = useCastomHook();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (pageYOffset > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const handelSearch = () => {
    router.push({
      pathname: "/place",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        totalGuest,
      },
    });
  };
  const clearGuest = (e) => {
    e.stopPropagation();
    setTotalGuest(null);
  };

  return (
    <>
      <div
        className={`w-100% fixed top-0 left-0 right-0 shadow-sm z-50 ${
          isColord && "bg-white"
        } ${showBackground && "bg-white pb-4 shadow-md"}`}
      >
        <nev
          className={`
          md:flex justify-around items-center transition-all duration-200
            ${showBackground && "bg-white"}
          `}
        >
          <div className="relative w-32 h-20 pl-2 md:w-40  md:h-24">
            <Image
              className=" object-contain cursor-pointer"
              src="https://airbnb-clone-ks.vercel.app/_next/image?url=http%3A%2F%2Flinks.papareact.com%2Fqd3&w=256&q=75"
              width="150px"
              height="100px"
              alt=""
              onClick={() => router.push("/")}
            />
          </div>

          {/* search section */}

          <div className="relative mx-4 md:w-2/4 bg-white border-2 h-15 rounded-full flex items-center justify-between ">
            <input
              className="outline-none w-20 xs:w-auto md:flex-1 h-15 p-4 rounded-full"
              type="text"
              placeholder={placeholder || "Where are you going"}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={clanderOpen}
            />

            <div className="flex flex-1 cursor-pointer items-center ">
              <hr className="-rotate-90 w-10 transform items-end" />
              <div
                onClick={guestOpen}
                className="mx-auto flex cursor-pointer items-center justify-between pr-4"
              >
                {guest > 0 ? (
                  <p className="opacity-50">{guest} Guest</p>
                ) : (
                  <>
                    <p className="opacity-50">
                      {totalGuest > 0 ? totalGuest : "Add"} Guest
                    </p>
                    {totalGuest > 0 && (
                      <span
                        onClick={clearGuest}
                        className="bg-gray-50 p-3 ml-4 md:ml-14 cursor-pointer hover:bg-gray-100 rounded-full "
                      >
                        <ImCross className="text-xs font-thin" />
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="bg-airbnb cursor-pointer w-12 h-12 rounded-full grid place-items-center mr-2">
              <AiOutlineSearch
                className="text-2xl text-white"
                onClick={handelSearch}
              />
            </div>
          </div>
          <div className="absolute md:static  top-4 right-4 md:w-72">
            <div className="flex items-center justify-between">
              <p
                className={`
                    hidden xs:block  text-xs md:text-sm cursor-pointer text-gray-300 hover:bg-gray-200 py-2 px-1 md:p-3 rounded-full hover:bg-opacity-50 transition-all duration-150'
                  ${showBackground && "text-black"}
                `}
              >
                Become a Host
              </p>
              <div className=" xs:w-12 w-40 relative h-12 cursor-pointer hover:bg-gray-200 rounded-full grid place-items-center hover:bg-opacity-40 transition-all duration-150">
                <BiWorld
                  className={`text-gray-300 hidden xs:block text-2xl z-10 ${
                    showBackground && "text-gray-700"
                  }
                  `}
                />
              </div>
              <div
                onClick={signInOpen}
                className={`
                 flex border-2 cursor-pointer items-center bg-white  px-3 py-2 md:p-4 rounded-full  justify-between w-1/3
                ${
                  showBackground &&
                  "hover:shadow-md transition-all duration-200"
                }
               `}
              >
                <AiOutlineMenu />
                <Image
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg"
                  }`}
                  alt=""
                  width="20px"
                  height="20px"
                  className="rounded-full pl-4 border-2"
                />
              </div>
            </div>
          </div>
        </nev>
      </div>
      {/* cleander showing */}
      <ClanderMenu />

      {/* guiest list  */}
      <GuestList />
      {/* menu component here */}
      <NevMenu />
    </>
  );
};

export default Navbar;
