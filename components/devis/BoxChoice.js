import React from "react";
import Timeline from "./Timeline";
import { choice } from "../../utils/tools";
import MainInfo from "../MainInfo";

const BoxChoice = () => {
  return (
    <div className="flex border-red-600 border-2  justify-center mt-36 h-[600px] items-center ">
      {choice.map((c, index) => (
        <div key={index} className="">
          <MainInfo
            title={c.title}
            // subTitle={c.subTitle}
            info={c.info}
            picture={c.picture}
          />
        </div>
      ))}
    </div>
  );
};

export default BoxChoice;
