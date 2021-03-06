import React, { useState, useContext } from "react";
import Image from "next/image";
import Box1 from "../../public/box1.jpg";
// import Autocomplete from "react-google-autocomplete";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { ContextStore } from "../../context/context";

const FormDevis = () => {
  // const [value, setValue] = useState(null);

  // const handleChange = (value) => {
  //   setAddressStarted(value);
  // };

  const handleSelectEnd = async (value) => {
    const results = await geocodeByAddress(value);
    const latLong = await getLatLng(results[0]);
    console.log("testcoor", latLong);
    setCityEnd(value);
    setCoordinatesEnd(latLong);
    setCoordinateLatEnd(latLong.lat);
    setCoordinateLongEnd(latLong.lng);
  };
  const {
    accesTruckStarted,
    setAccesTruckStarted,
    stairStarted,
    setStairStarted,
    LiftStarted,
    setLiftStarted,
    distancePortageStarted,
    setDistancePortageStarted,
    addressStarted,
    setAddressStarted,
    volumeCalculDem,
    // totalStarted,
    setPortageTotalStarted,
    iChoiceMyVolume,
  } = useContext(ContextStore);
  let totalStarted = 0;

  if (distancePortageStarted === "De 15m à 29m") {
    totalStarted =
      totalStarted + 30 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  } else if (distancePortageStarted === "Moins de 15m") {
    totalStarted =
      totalStarted + 15 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  } else if (distancePortageStarted === "De 30m à 39m") {
    totalStarted =
      totalStarted + 39 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  } else if (distancePortageStarted === "De 40m à 49m") {
    totalStarted =
      totalStarted + 49 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  } else if (distancePortageStarted === "De 50m à 59m") {
    totalStarted =
      totalStarted + 59 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  } else if (distancePortageStarted === "De 60m à 79m") {
    totalStarted =
      totalStarted + 79 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  } else if (distancePortageStarted === "De 80m à 100m") {
    totalStarted =
      totalStarted + 100 * (Number(volumeCalculDem) + Number(iChoiceMyVolume));
    setPortageTotalStarted(totalStarted);
  }

  console.log("la=>>>", [iChoiceMyVolume, volumeCalculDem, totalStarted]);
  console.log("juju", totalStarted.toFixed(2));
  console.log("lili", distancePortageStarted);
  return (
    <>
      {/* <!-- Container --> */}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-6">
          {/* <!-- Row --> */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> */}
            <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              <Image
                src={Box1}
                alt="image carton"
                height={600}
                width={400}
                layout="fixed"
                quality={100}
                priority
              />
            </div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                Votre adresse de départ
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="adresse"
                    >
                      Accéssibilité en camion 19T
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Adresse"
                      value={accesTruckStarted}
                      onChange={(e) => setAccesTruckStarted(e.target.value)}
                    >
                      <option value="possible">Possible</option>
                      <option value="difficile">Difficile</option>
                      <option value="impossible">Impossible</option>
                    </select>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Etage
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Etage"
                      value={stairStarted}
                      onChange={(e) => setStairStarted(e.target.value)}
                    >
                      <option value="rdc">0</option>
                      <option value="1er étage">1</option>
                      <option value="2éme étages">2</option>
                      <option value="3éme étages">3</option>
                      <option value="4éme étages">4</option>
                      <option value="5éme étages">5</option>
                    </select>
                    {/* test */}
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Ascenseur
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Ascenseur"
                      value={LiftStarted}
                      onChange={(e) => setLiftStarted(e.target.value)}
                    >
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Distance Portance
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Etage"
                    value={distancePortageStarted}
                    onChange={(e) => setDistancePortageStarted(e.target.value)}
                  >
                    <option value="Moins de 15m">Moins de 15m</option>
                    <option value="De 15m à 29m">De 15m à 29m</option>
                    <option value="De 30m à 39m">De 30m à 39m</option>
                    <option value="De 40m à 49m">De 40m à 49m</option>
                    <option value="De 50m à 59m">De 50m à 59m</option>
                    <option value="De 60m à 79m">De 60m à 79m</option>
                    <option value="De 80m à 100m">De 80m à 100m</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Adresse
                  </label>
                  {/* <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Adresse"
                  /> */}
                  <PlacesAutocomplete
                    value={addressStarted}
                    onChange={setAddressStarted || ""}
                    onSelect={handleSelectEnd}
                    // apiKey="AIzaSyDjkkPohdUpPKd_FEc2mubVvaZeSIviEZY"
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
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
                          {suggestions.map((suggestion, i) => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  backgroundColor: "#fafafa",
                                  cursor: "pointer",
                                }
                              : {
                                  backgroundColor: "#ffffff",
                                  cursor: "pointer",
                                };
                            return (
                              <div
                                key={i}
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

                  {/* <GooglePlacesAutocomplete
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    placeholder="Adresse test"
                    apiKey={process.env.GOOGLE_MAPS_APIKEYBIS}
                    apiKey="AIzaSyDjkkPohdUpPKd_FEc2mubVvaZeSIviEZY"
                    selectProps={{
                      value: addressStarted,
                      onchange: setAddressStarted,
                    }}
                    value={addressStarted}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    apiOptions={{ language: "fr", region: "fr" }}
                    debounce={100}

                    apiKey={process.env.GOOGLE_MAPS_APIKEY}
                    nearbyPlacesApi="GooglePlacesSearch"
                    debounce={400}
                    query={{
                      key: process.env.GOOGLE_MAPS_APIKEY,
                      language: "fr",
                    }}
                  >
                  </GooglePlacesAutocomplete> */}
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormDevis;
