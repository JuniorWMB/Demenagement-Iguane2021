import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import Head from "next/head";

// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Custom404 = () => {
  const [address, setAddress] = useState();
  const [coordianateLat, setCoordinateLat] = useState();
  const [coordianateLong, setCoordinateLong] = useState();

  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    console.log("testcoor", latLong.lat);
    setAddress(value);
    setCoordinates(latLong);
    // test
    setCoordinateLat(latLong.lat);
    setCoordinateLong(latLong.lng);
  };
  const coorLat = coordinates.lat;
  const coorLng = coordinates.lng;

  console.log("Lat only", coordianateLat);
  console.log("Long only", coordianateLong);
  //   console.log("look", GooglePlacesAutocomplete);

  return (
    <>
      <Head>
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKTyO97QOyTHdnaxmKXSqJQCaxS_TB29c&libraries=places"
        ></script>
      </Head>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress || ""}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div key={suggestions.description} className="inputStart">
            <input
              style={{ width: "520px" }}
              {...getInputProps({
                placeholder: "Ici votre adresse d'arrivée...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={suggestion}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className="textDropdown">
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default Custom404;
