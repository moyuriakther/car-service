import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MyLocation = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBWXw8qomz7pQf7-9cNPC6-IYwLSZ2PJHA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MyLocation;
