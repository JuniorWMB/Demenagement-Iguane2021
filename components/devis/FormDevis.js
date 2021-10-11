import React from "react";
import Image from "next/image";
import Box1 from "../../public/box1.jpg";

const FormDevis = () => {
  return (
    <>
      {/* <!-- Container --> */}
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-6">
          {/* <!-- Row --> */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> */}
            <Image
              src={Box1}
              alt="image carton"
              height={600}
              width={350}
              layout="fixed"
              quality={100}
              priority
            />

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
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
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
                  >
                    <option value="under15">Moins de 15m</option>
                    <option value="between15and29">De 15m à 29m</option>
                    <option value="between30and39">De 30m à 39m</option>
                    <option value="between40and49">de 40m à 49m</option>
                    <option value="between50and59">de 50m a 59m</option>
                    <option value="between60and69">de 60m a 79m</option>
                    <option value="between80and100">de 80m a 100m</option>
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

export default FormDevis;
