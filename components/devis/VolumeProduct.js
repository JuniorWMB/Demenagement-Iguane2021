import React, { useState, useContext } from "react";
import { ContextStore } from "../../context/context";
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
import FormDevis from "./FormDevis";
import Form from "../Form";

const VolumeProduct = () => {
  const { navCalculDevis, setNavCalculDevis } = useContext(ContextStore);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className=" h-3/4 box-content  md:w-full">
      {navCalculDevis === 0 ? (
        <div className="flex flex-col h-full break-all  md:">
          <div
            // style={{
            //   borderBottom: "2px solid #eaeaea",
            // }}
            className="flex-wrap "
          >
            <ul className="flex  border  cursor-pointer flex-wrap  md:flex-nowrap  ">
              <li
                className={
                  toggleState === 1
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : " p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(1)}
              >
                Buanderie
              </li>
              <li
                className={
                  toggleState === 2
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(2)}
              >
                Bureau
              </li>
              <li
                className={
                  toggleState === 3
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(3)}
              >
                Carton
              </li>
              <li
                className={
                  toggleState === 4
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(4)}
              >
                Chambre
              </li>
              <li
                className={
                  toggleState === 5
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(5)}
              >
                Cuisine
              </li>
              <li
                className={
                  toggleState === 6
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(6)}
              >
                Entrée
              </li>
              <li
                className={
                  toggleState === 7
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(7)}
              >
                Garage
              </li>
              <li
                className={
                  toggleState === 8
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(8)}
              >
                Jardin
              </li>
              <li
                className={
                  toggleState === 9
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(9)}
              >
                Salle de Bain
              </li>
              <li
                className={
                  toggleState === 10
                    ? "py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    : "p-3 text-center w-full bg-gray-200 box-content relative outline-none  border-b-0 border-gray-600"
                }
                onClick={() => toggleTab(10)}
              >
                Salon
              </li>
            </ul>
          </div>

          {/* logic buanderie */}
          {}
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {item.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
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
                    <p className="absolute text-sm italic dark:text-white text-indigo-500 text-md font-medium top-2 right-2">
                      {desk.volume}m3
                    </p>

                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                      {desk.name}
                    </p>
                    <p className="dark:text-gray-50 text-gray-700 text-xs font-thin py-2 px-6"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {navCalculDevis === 1 ? <FormDevis /> : null}
    </div>
  );
};

export default VolumeProduct;
