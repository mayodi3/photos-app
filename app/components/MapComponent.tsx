import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const position: [number, number] = [0.0746686, 34.7251405];

  if (typeof window === "undefined") return null; // Return null on the server side

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Maphotos <br /> We are located here!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
