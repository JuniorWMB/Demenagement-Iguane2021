import React from "react";
import Timeline from "./Timeline";
import { choice } from "../../utils/tools";
import MainInfo from "../MainInfo";

const BoxChoice = () => {
  return (
    <div className=" flex  justify-center my-12 h-[400px] ">
      {choice.map((c, index) => (
        <div key={index}>
          {/* <Timeline
            title={c.title}
            subTitle={c.subTitle}
            info={c.info}
            picture={c.picture}
          /> */}
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
