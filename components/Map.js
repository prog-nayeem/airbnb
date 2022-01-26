import { getCenter } from "geolib";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ data }) => {
  const [slectedLocation, setSlectedLocation] = useState(null);
  const coordinates = data.map(({ long, lat }) => ({
    longitude: long,
    latitude: lat,
  }));
  const centerPoint = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    // height: 650,
    height: "100%",
    latitude: centerPoint.latitude,
    longitude: centerPoint.longitude,
    zoom: 10,
  });
  return (
    <>
      <section className="hidden lg:inline-flex">
        <ReactMapGL
          mapStyle="mapbox://styles/nayemahammad/ckx4z1gdz6lco14o4aei58yl8"
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {data.map(({ long, lat, star, title }) => (
            <div key={long}>
              <Marker longitude={long} latitude={lat}>
                <p
                  onClick={() => setSlectedLocation(title, star)}
                  className="flex items-center bg-white cursor-pointer hover:scale-110 transform rounded-xl p-2 font-bold"
                >
                  <AiFillStar className="text-red-400 mr-1" />
                  {star}
                </p>
              </Marker>
              {slectedLocation === title && (
                <Popup
                  onClose={() => setSlectedLocation(null)}
                  latitude={lat}
                  longitude={long}
                  closeOnClick={true}
                >
                  {title}
                </Popup>
              )}
            </div>
          ))}
        </ReactMapGL>
      </section>
    </>
  );
};

export default Map;
