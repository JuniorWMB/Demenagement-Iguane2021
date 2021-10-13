import React, { useEffect, useState } from "react";
import Image from "next/image";

const MainInfo = ({ info, title, picture, subTitle, href, id }) => {
  return (
    <div
      className=" overflow-hidden rounded-lg h-[400px] w-60 md:w-80 cursor-pointer m-auto ml-4 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
      // onClick={handleChoice}
    >
      <a href={href} className="w-full block h-full border-2 ">
        <Image
          alt="blog photo"
          src={picture}
          className="max-h-20 w-full object-cover"
          layout="responsive"
          height="350px"
          priority
        />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <p className="text-green-500 text-md font-medium">{title}</p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {subTitle}
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
