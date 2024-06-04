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
import Time from "./Time";
import Reminder from "./Reminder";
import Repeat from "./Repeat";

const SetDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const handleDueDate = (days) => {
    if (days === 0) setSelectedDate(new Date());
    else {
      const baseDate = selectedDate || new Date();
      const newDate = new Date(baseDate);
      newDate.setDate(baseDate.getDate() + days);
      setSelectedDate(newDate);
    }
  };
  console.log(selectedDate?.toLocaleDateString());


  const handleTimeClick = () => {
    setShowTime(!showTime);
  };

  const handleReminderClick = () => {
    setShowReminder(!showReminder);
  };

  const handleRepeatClick = () => {
    setShowRepeat(!showRepeat);
  };  

  const handleTimeSelect = (time) => {
    if (time) {
      const [hours, minutes] = time.split(":").map(Number);
      const newDate = new Date(selectedDate);
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      setSelectedDate(newDate);
      setShowTime(false);
      console.log(selectedDate);
    }
  };

  return (
    <div>
      <div className="date-picker px-5 py-4">
        <div>
          <p className="heading">Set Due Date</p>
          <div className="flex gap-3 my-3 pb-2 border-b">
            <WbSunnyIcon onClick={() => handleDueDate(0)} className="icons" />
            <InsertInvitationIcon
              onClick={() => handleDueDate(7)}
              className="icons"
            />
            <Forward10Icon
              onClick={() => handleDueDate(10)}
              className="icons"
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
        <div className="extra-values">
          <div
            className="flex justify-between py-1 cursor-pointer"
            onClick={handleTimeClick}
          >
            <span>
              <AccessTimeIcon
                sx={{ width: "20px", height: "20px", marginRight: "10px" }}
                className="icons"
              />
              Time
            </span>
            <ChevronRightIcon
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
          </div>
          <div
            className="flex justify-between py-1 cursor-pointer"
            onClick={handleReminderClick}
          >
            <span>
              <AccessAlarmIcon
                sx={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Reminder
            </span>
            <ChevronRightIcon
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
          </div>
          <div
            className="flex justify-between py-1 cursor-pointer"
            onClick={handleRepeatClick}
          >
            <span>
              <RepeatIcon
                sx={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Repeat
            </span>
            <ChevronRightIcon
              sx={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5 font-normal">
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
      {showTime && <Time onSelect={handleTimeSelect} />}
      {showReminder && <Reminder />}
      {showRepeat && <Repeat />}
    </div>
  );
};

export default SetDate;
