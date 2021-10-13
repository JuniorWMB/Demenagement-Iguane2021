import React from "react";

const Modal = () => {
  return (
    <div className="min-w-screen min-h-screen bg-random flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-3xl shadow-xl bg-white"
        style="max-width: 300px"
      >
        <div className="w-full px-5 pt-8 pb-3">
          <div className="rounded-full w-44 h-44 mx-auto border-8 border-gray-300 flex items-center justify-center">
            <i className="mdi mdi-arrow-down text-8xl text-gray-300 leading-none"></i>
          </div>
        </div>
        <div className="w-full px-5 text-center pb-8 border-b border-gray-300">
          <h1 className="text-2xl font-light text-gray-800 leading-tight">
            Ready when you are
          </h1>
          <p className="text-xs text-gray-500">Transfer expires in 7 days</p>
        </div>
        <ul>
          <li className="w-full px-5 py-2 border-b border-gray-300">
            <div className="w-full flex">
              <div className="flex-grow">
                <h3 className="text-sm text-gray-800 leading-tight">
                  LoremIpsum_sitamore.zip
                </h3>
                <p className="text-xs text-gray-500">138 MB - zip</p>
              </div>
              <div className="w-12 text-right">
                <i className="mdi mdi-download-circle-outline text-blue-500 text-2xl"></i>
              </div>
            </div>
          </li>
        </ul>
        <div className="w-full px-5 py-5 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-10 py-2 transition-colors">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
