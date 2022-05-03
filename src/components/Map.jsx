import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useMap from "../hooks/useMap";

function Map() {
  const { position, loading } = useMap("jardin plaza");

  return loading ? (
    <p>Loading</p>
  ) : (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "900px", height: "600px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
