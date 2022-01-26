import { BiWorld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Fotter = () => {
  return (
    <>
      <div className="bg-gray-50 mt-16">
        <div className="py-12 grid grid-cols-2 pl-10 text-xs md:text-sm lg:text-base max-w-screen-lg  mx-auto md:grid-cols-3 lg:grid-cols-4">
          <div className="mb-5">
            <strong>About</strong>
            <ul>
              <li className="cursor-pointer">How Airbnb works</li>
              <li>Investors</li>
              <li>HotelTonight</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Airbnb Plus</li>
              <li>Airbnb for Work</li>
              <li>Founders Letter</li>
              <li>Airbnb 2021</li>
              <li>Airbnb Luxe</li>
              <li>Made possible by Hosts</li>
            </ul>
          </div>
          <div>
            <strong>Community</strong>
            <ul>
              <li>Diversity & Belonging</li>
              <li>Host Afghan refugees</li>
              <li>Airbnb.org</li>
              <li>Accessibility</li>
              <li>Guest Referrals</li>
              <li>Airbnb Associates</li>
              <li>Gift cards</li>
            </ul>
          </div>
          <div>
            <strong>Host</strong>
            <ul>
              <li>Host your home</li>
              <li>Responsible hosting</li>
              <li>Host an Online Experience</li>
              <li>Resource Center</li>
              <li>Host an Experience</li>
              <li>Community Center</li>
            </ul>
          </div>
          <div>
            <strong>Support</strong>
            <ul>
              <li>Our COVID-19 Response</li>
              <li>Neighborhood Support</li>
              <li>Help Center</li>
              <li>Trust & Safety</li>
              <li>Cancellation options</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className=" flex flex-col lg:flex-row max-w-screen-lg mx-auto justify-between py-10">
          <div className="flex items-center text-sm md:text-base justify-center space-x-4">
            <p>© 2021 Airbnb, Inc</p>
            <div className="space-x-6 md:text-base text-sm">
              <strong className="cursor-pointer">Privacy·</strong>
              <strong className="cursor-pointer">Terms</strong>
              <strong className="cursor-pointer">Sitemap</strong>
            </div>
          </div>
          <div className="flex mx-auto mt-4 items-center space-x-5 text-sm md:text-base">
            <BiWorld />
            <p className="cursor-pointer">English(US)</p>
            <p className="cursor-pointer">$ USD</p>
            <ImFacebook className="cursor-pointer" />
            <BsTwitter className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
