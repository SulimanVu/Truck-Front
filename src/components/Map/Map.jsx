import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";
import RoutineMachine from "./RoutineMachine";
import { saveRoute } from "../../features/requestSlice";

function Map() {

  const [error, setError] = useState(false)

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/530453.png"),
      iconUrl: require("leaflet/dist/images/530453.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  
  const center = [53.041274583621956, 38.59640482775108];

  return (
    <>
      <MapContainer
        center={center}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "70vh", width: "100%", padding: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          subdomains="abcd"
          accessToken="P7mzJeFFOYSd4jQQn63WJv52ny6MDpml5GhbREvKAWHEz3h3b9eBOVjtZwnz2GpH"
        />
        <RoutineMachine position={"topright"} />
      </MapContainer>
    {error && <h1 style={{color: 'red'}}>Ваши координаты сохранены</h1>}
    </>
  );
}

export default Map;
