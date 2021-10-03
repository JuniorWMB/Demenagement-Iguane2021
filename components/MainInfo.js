import React from "react";
import Image from "next/image";

const MainInfo = ({ info, title, picture }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-full w-60 md:w-80 cursor-pointer m-auto ml-4">
      <a href="#" className="w-full block h-full">
        <Image
          alt="blog photo"
          src={picture}
          className="max-h-20 w-full object-cover"
          layout="responsive"
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-indigo-500 text-md font-medium">{title}</p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            Supercharged
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {info}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MainInfo;
