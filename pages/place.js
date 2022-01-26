import Fotter from "../components/Fotter";
import PlaceSection from "../components/PlaceSection";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import dateFormat from "dateformat";
import { useRouter } from "next/router";
import SigninModel from "../components/SinginModel";
import Alert from "../components/Alert";

const Place = ({ res }) => {
  const router = useRouter();
  const { location, startDate, endDate, totalGuest } = router.query;

  const formateStartDate = dateFormat(startDate, "mmmm dS, yyyy");
  const formateEndDate = dateFormat(endDate, "mmmm dS, yyyy");
  return (
    <>
      {/* nav component */}

      <Navbar
        isColord
        placeholder={`${location} | ${formateStartDate} - ${formateEndDate}`}
        guest={totalGuest}
      />
       <SigninModel />
        <Alert />
      <div className="w-100% min-h-screen px-12">
        <main className="mt-40 md:mt-36 relative grid grid-flow-col lg:grid-cols-3 xl:grid-cols-2 space-x-6">
          {/* place and map component here */}
          <section className="lg:col-span-2 xl:col-span-1">
            <PlaceSection
              formate={`${formateStartDate} - ${formateEndDate}`}
              location={location}
              guset={totalGuest}
              data={res}
            />
          </section>
          <Map data={res} />
        </main>
      </div>
      <Fotter />
    </>
  );
};

export default Place;

export async function getServerSideProps(context) {
  const res = await fetch("https://links.papareact.com/isz").then((res) =>
    res.json()
  );
  return {
    props: {
      res,
    },
  };
}
