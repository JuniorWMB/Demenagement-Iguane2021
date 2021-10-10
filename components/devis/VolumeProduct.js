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
import notFound from "../../public/notfound.png";

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

      <div className="flex flex-col  relative h-full break-all border border-green-200 md:">
        <div
          style={{
            borderBottom: "2px solid #eaeaea",
          }}
          className="flex-wrap "
        >
          <ul className="flex cursor-pointer flex-wrap border-red-700 border-2 md:flex-nowrap">
            <li
              className={
                toggleState === 1
                  ? "p-3 text-center w-full   bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : " p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(1)}
            >
              Buanderie
            </li>
            <li
              className={
                toggleState === 2
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(2)}
            >
              Bureau
            </li>
            <li
              className={
                toggleState === 3
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(3)}
            >
              Carton
            </li>
            <li
              className={
                toggleState === 4
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(4)}
            >
              Chambre
            </li>
            <li
              className={
                toggleState === 5
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(5)}
            >
              Cuisine
            </li>
            <li
              className={
                toggleState === 6
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(6)}
            >
              Entrée
            </li>
            <li
              className={
                toggleState === 7
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(7)}
            >
              Garage
            </li>
            <li
              className={
                toggleState === 8
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(8)}
            >
              Jardin
            </li>
            <li
              className={
                toggleState === 9
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(9)}
            >
              Salle de Bain
            </li>
            <li
              className={
                toggleState === 10
                  ? "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600 bg-white border-b border"
                  : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
              }
              onClick={() => toggleTab(10)}
            >
              Salon
            </li>
          </ul>
        </div>

        {/* logic buanderie */}
        <div
          className={
            toggleState === 1
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {buanderie.map((item, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
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

        {/* logic bureau */}

        <div
          className={
            toggleState === 2
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {bureau.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cartons logic */}

        <div
          className={
            toggleState === 3
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {cartons.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* chambre logic */}

        <div
          className={
            toggleState === 4
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {chambre.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* cuisine */}

        <div
          className={
            toggleState === 5
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {cuisine.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* entree */}

        <div
          className={
            toggleState === 6
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {entree.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* garage */}

        <div
          className={
            toggleState === 7
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {garage.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* jardin */}

        <div
          className={
            toggleState === 8
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {jardin.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* salle de bain */}

        <div
          className={
            toggleState === 9
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {salleDeBain.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* salon */}

        <div
          className={
            toggleState === 10
              ? "h-full  overflow-y-auto flex flex-wrap justify-center w-full bg-green-50"
              : "hidden"
          }
        >
          {salon.map((desk, i) => (
            <div
              key={i}
              className="flex shadow-lg rounded-2xl m-2 p-8 bg-white dark:bg-gray-900 w-60 h-56  relative"
            >
              <div className="w-full h-full text-center">
                <div className="flex h-full flex-col justify-between">
                  <Image
                    src={desk.picture === null ? notFound : desk.picture}
                    alt={desk.name}
                  />
                  <p className="absolute text-sm italic dark:text-white text-gray-800 top-2 right-2">
                    {desk.volume}m3
                  </p>

                  <p className="text-gray-900 dark:text-white text-lg mt-4">
                    {desk.name}
                  </p>
                  <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolumeProduct;
