import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./DatePicker.css";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import Forward10Icon from "@mui/icons-material/Forward10";

const SetDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDueDate = (days) => {
    if (days === 0) setSelectedDate(new Date());
    else {
      const baseDate = selectedDate || new Date();
      const newDate = new Date(baseDate);
      newDate.setDate(baseDate.getDate() + days);
      setSelectedDate(newDate);
    }
  };
  console.log(selectedDate);

  return (
    <div>
      <div className="absolute bg-white z-10 border border-black-solid shadow-md text-gray-500 px-5 py-4">
        <div>
          <p className="text-sm">Set Due Date</p>
          <div className="flex gap-3 my-3 pb-2  border-b">
            <WbSunnyIcon
              onClick={() => handleDueDate(0)}
              className="cursor-pointer"
            />
            <InsertInvitationIcon
              onClick={() => handleDueDate(7)}
              className="cursor-pointer"
            />{" "}
            <Forward10Icon
              onClick={() => handleDueDate(10)}
              className="cursor-pointer"
            />
          </div>
          <div className="border-b my-3 pb-6 relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              minDate={new Date()}
            />
          </div>
        </div>
        <div className="text-sm font-normal">
          <p className="flex justify-between py-1">
            <span>
              <AccessTimeIcon
                sx={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Time
            </span>
            <ChevronRightIcon
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
          </p>

          <p className="flex justify-between py-1">
            <span>
              <AccessAlarmIcon
                sx={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Reminder
            </span>
            <ChevronRightIcon
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
          </p>
          <p className="flex justify-between py-1">
            <span>
              <RepeatIcon
                sx={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Repeat
            </span>
            <ChevronRightIcon
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
          </p>
        </div>
        <div className="flex justify-center my-4 font-normal">
          <button
            className="mx-1 w-[45%] px-6 py-1 border rounded-md text-sm"
            onClick={() => setSelectedDate(null)}
          >
            Clear
          </button>
          <button className="mx-1 w-[45%] px-6 py-1 border rounded-md text-sm text-white bg-blue-500">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetDate;
