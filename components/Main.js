import React from "react";
import MainInfo from "./MainInfo";
import { infos } from "../utils/tools";

const Main = () => {
  return (
    <div className="flex  justify-center my-12 h-[400px] ">
      {infos.map((info, index) => (
        <div className="flex " key={info.id}>
          <MainInfo
            title={info.title}
            info={info.info}
            picture={info.picture}
            subTitle={info.subTitle}
            href={info.href}
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
