import React from "react";
import Timeline from "./Timeline";
import { choice } from "../../utils/tools";
import MainInfo from "../MainInfo";
import Form from "../Form";
import DevisInfos from "./DevisInfos";
import Steps from "./Steps";

const BoxChoice = () => {
  return (
    <>
      <div className="max-w-xl mt-48 mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Emballages et fournitures
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Choissisez</span>
          </span>{" "}
          vos emballages et vos fournitures
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Nous vous proposons different types de carton pour votre déménagement.
        </p>
      </div>
      <div className="flex justify-center mt-36 h-[600px] w-full items-center flex-col overflow-hidden overflow-x-auto flex-wrap md:overscroll-none ">
        {choice.map((c, index) => (
          <div key={index} className="">
            <MainInfo
              title={c.title}
              // subTitle={c.subTitle}
              info={c.info}
              picture={c.picture}
              href={c.href}
              id={c.id}
            />
          </div>
        ))}
      </div>
      <Steps />
      <DevisInfos />
      <Form />
    </>
  );
};

export default BoxChoice;
