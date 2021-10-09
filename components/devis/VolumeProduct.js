import React, { useState } from "react";

const VolumeProduct = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("here=>", index);
  };

  return (
    <div className="border-green-500 border-2 h-full mb-4 md:w-full">
      {/* test */}

      {/* <div className="px-7 bg-white shadow-lg rounded-xl mb-5">
        <div className="flex">
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleTab === 1
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(1)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Buanderie</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleTab === 2
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(2)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Bureau</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 3
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(3)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-search text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Carton</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 4
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(4)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Chambre</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 5
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(5)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Cuisne</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 6
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(6)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Entrée</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 7
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(7)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Garage</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 8
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(8)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Jardin</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 9
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(9)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Bain</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className={
                toggleState === 10
                  ? "border-green-500"
                  : "flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              }
              onClick={() => toggleTab(10)}
            >
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Salon</span>
              </span>
            </a>
          </div>
        </div>
      </div> */}

      {/* test */}

      <div className="flex flex-col relative h-full break-all border border-green-200 md:">
        <div
          style={{
            borderBottom: "2px solid #eaeaea",
          }}
        >
          <ul className="flex cursor-pointer">
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

        {/* <div className="flex flex-col overflow-hidden md:flex-row">
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none md:border-green-700 border-r-2"
            onClick={() => toggleTab(1)}
          >
            Buanderie
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(2)}
          >
            Bureau
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(3)}
          >
            Carton
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(4)}
          >
            Chambre
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(5)}
          >
            Cuisine
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(6)}
          >
            Entrée
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(7)}
          >
            Garage
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(8)}
          >
            Jardin
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(9)}
          >
            Salle de Bain
          </div>
          <div
            className="w-full p-4 text-center bg-green-50 cursor-pointer border-b border-green-700 box-content relative outline-none"
            onClick={() => toggleTab(10)}
          >
            Salon
          </div>
        </div> */}
        {/* Information for onglet */}
        {/* <div
          className={
            toggleTab === 1
              ? "bg-white w-full h-full p-5 block"
              : " bg-white w-full h-full p-5"
          }
        >
          <h1>Good</h1>
        </div>
        <div
          className={
            toggleTab === 2
              ? "bg-white w-full h-full p-5 "
              : " hidden bg-white w-full h-full p-5"
          }
        >
          <h1>bad</h1>
        </div> */}
        <div className={toggleState === 1 ? "h-full bg-green-50" : "hidden"}>
          One
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
