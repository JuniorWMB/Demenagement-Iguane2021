import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import fr from "date-fns/locale/fr";

console.log("here", fr);
const Calendar = ({ title }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div className="flex flex-col col-span-3 mx-auto ">
      <h1 className="font-sans text-l font-bold leading-none tracking-tight text-green-900 sm:text-4xl md:mx-auto">
        {title}
      </h1>
      <DateRangePicker
        locale={fr}
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#397957"]}
        onChange={handleSelect}
      />
    </div>
  );
};

export default Calendar;
