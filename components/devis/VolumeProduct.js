import React, { useState } from "react";
import Image from "next/image";
import {
  buanderie,
  bureau,
  cartons,
  chambre,
  cuisine,
  entree,
  garage,
  jardin,
  salleDeBain,
  salon,
} from "../../utils/dataProduct";

const VolumeProduct = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("here=>", index);
  };

  return (
    <div className="border-green-500 border-2 h-full mb-4 md:w-full">
      {/* test */}

      {/* test */}

      <div className="flex flex-col relative h-full break-all border border-green-200 md:">
        <div
          style={{
            borderBottom: "2px solid #eaeaea",
          }}
          className="flex-wrap"
        >
          <ul className="flex cursor-pointer flex-wrap">
            <li
              className={
                toggleState === 1
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : " p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(1)}
            >
              Buanderie
            </li>
            <li
              className={
                toggleState === 2
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(2)}
            >
              Bureau
            </li>
            <li
              className={
                toggleState === 3
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(3)}
            >
              Carton
            </li>
            <li
              className={
                toggleState === 4
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(4)}
            >
              Chambre
            </li>
            <li
              className={
                toggleState === 5
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(5)}
            >
              Cuisine
            </li>
            <li
              className={
                toggleState === 6
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(6)}
            >
              Entrée
            </li>
            <li
              className={
                toggleState === 7
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(7)}
            >
              Garage
            </li>
            <li
              className={
                toggleState === 8
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(8)}
            >
              Jardin
            </li>
            <li
              className={
                toggleState === 9
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(9)}
            >
              Salle de Bain
            </li>
            <li
              className={
                toggleState === 10
                  ? "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-1/2 bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(10)}
            >
              Salon
            </li>
          </ul>
        </div>

        <div
          className={
            toggleState === 1
              ? "h-full flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {buanderie.map((item, i) => (
            <div
              key={i}
              className="flex  shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image alt={item.name} src={item.picture} width={10} />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {item.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {item.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={toggleState === 2 ? "h-full bg-green-50" : "hidden"}>
          Two
        </div>
        <div className={toggleState === 3 ? "h-full bg-green-50" : "hidden"}>
          Three
        </div>
        <div className={toggleState === 4 ? "h-full bg-green-50" : "hidden"}>
          Four
        </div>
        <div className={toggleState === 5 ? "h-full bg-green-50" : "hidden"}>
          Five
        </div>
        <div className={toggleState === 6 ? "h-full bg-green-50" : "hidden"}>
          Six
        </div>
        <div className={toggleState === 7 ? "h-full bg-green-50" : "hidden"}>
          Seven
        </div>
        <div className={toggleState === 8 ? "h-full bg-green-50" : "hidden"}>
          Eight
        </div>
        <div className={toggleState === 9 ? "h-full bg-green-50" : "hidden"}>
          Nine
        </div>
        <div className={toggleState === 10 ? "h-full bg-green-50" : "hidden"}>
          ten
        </div>
      </div>
    </div>
  );
};

export default VolumeProduct;
