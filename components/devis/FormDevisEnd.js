import React, { useContext } from "react";
import Image from "next/image";
import Box1 from "../../public/dempicture.jpg";
import { ContextStore } from "../../context/context";

const FormDevisEnd = () => {
  const {
    accesTruckArrived,
    setAccesTruckArrived,
    stairArrived,
    setStairArrived,
    LiftArrived,
    setLiftArrived,
    distancePortageArrived,
    setDistancePortageArrived,
    addressArrived,
    setAddressArrived,
  } = useContext(ContextStore);

  console.log([
    accesTruckArrived,
    setAccesTruckArrived,
    stairArrived,
    setStairArrived,
    LiftArrived,
    setLiftArrived,
    distancePortageArrived,
    setDistancePortageArrived,
  ]);

  return (
    <>
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
                Votre adresse d'arrivée
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
                      value={accesTruckArrived}
                      onChange={(e) => setAccesTruckArrived(e.target.value)}
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
                      value={stairArrived}
                      onChange={(e) => setStairArrived(e.target.value)}
                    >
                      <option value="rdc">rdc</option>
                      <option value="1ére étage">1</option>
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
                      value={LiftArrived}
                      onChange={(e) => setLiftArrived(e.target.value)}
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
                    value={distancePortageArrived}
                    onChange={(e) => setDistancePortageArrived(e.target.value)}
                  >
                    <option value="Moins de 15m">Moins de 15m</option>
                    <option value="De 15m à 29m">De 15m à 29m</option>
                    <option value="De 30m à 39m">De 30m à 39m</option>
                    <option value="De 40m à 49m">de 40m à 49m</option>
                    <option value="De 50m à 59m">de 50m à 59m</option>
                    <option value="De 60m à 79m">de 60m à 79m</option>
                    <option value="De 80m à 100m">de 80m à 100m</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Adresse
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Adresse"
                  />
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

export default FormDevisEnd;
