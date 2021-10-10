import React from "react";
import Timeline from "./Timeline";
import { choice } from "../../utils/tools";
import MainInfo from "../MainInfo";
import Form from "../Form";
import DevisInfos from "./DevisInfos";

const BoxChoice = () => {
  return (
    <>
      <div className="flex justify-center mt-36 h-[600px] w-full items-center flex-col overflow-hidden overflow-x-auto flex-wrap md:overscroll-none ">
        {choice.map((c, index) => (
          <div key={index} className="">
            <MainInfo
              title={c.title}
              // subTitle={c.subTitle}
              info={c.info}
              picture={c.picture}
              href={c.href}
            />
          </div>
        ))}
      </div>
      <DevisInfos />
      <Form />
    </>
  );
};

export default BoxChoice;
