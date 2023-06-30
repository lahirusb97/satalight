import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";

export default function App() {
  const Alldata = {
    1: {
      6: 97,
      7: 84,
      8: 70,
      9: 57,
      10: 45,
      11: 34,
      12: 28,
      13: 29,
      14: 37,
      15: 48,
      16: 60,
      17: 74,
      18: 88,
    },
    2: {
      6: 97,
      7: 83,
      8: 69,
      9: 54,
      10: 40,
      11: 28,
      12: 19,
      13: 20,
      14: 30,
      15: 43,
      16: 57,
      17: 71,
      18: 86,
    },
    3: {
      6: 94,
      7: 80,
      8: 65,
      9: 50,
      10: 36,
      11: 21,
      12: 9,
      13: 13,
      14: 27,
      15: 41,
      16: 56,
      17: 71,
      18: 86,
    },
    4: {
      6: 90,
      7: 77,
      8: 62,
      9: 47,
      10: 33,
      11: 18,
      12: 6,
      13: 14,
      14: 28,
      15: 43,
      16: 57,
      17: 72,
      18: 87,
    },
    5: {
      6: 89,
      7: 76,
      8: 62,
      9: 48,
      10: 34,
      11: 21,
      12: 14,
      13: 19,
      14: 31,
      15: 44,
      16: 58,
      17: 72,
      18: 86,
    },
    6: {
      6: 90,
      7: 77,
      8: 63,
      9: 49,
      10: 36,
      11: 24,
      12: 17,
      13: 21,
      14: 31,
      15: 44,
      16: 57,
      17: 71,
      18: 85,
    },
    7: {
      6: 91,
      7: 78,
      8: 64,
      9: 50,
      10: 36,
      11: 24,
      12: 15,
      13: 18,
      14: 29,
      15: 42,
      16: 56,
      17: 70,
      18: 90,
    },
    8: {
      6: 91,
      7: 78,
      8: 63,
      9: 49,
      10: 34,
      11: 19,
      12: 7,
      13: 13,
      14: 27,
      15: 42,
      16: 56,
      17: 71,
      18: 86,
    },
    9: {
      6: 94,
      7: 80,
      8: 65,
      9: 50,
      10: 36,
      11: 21,
      12: 9,
      13: 13,
      14: 27,
      15: 41,
      16: 56,
      17: 71,
      18: 86,
    },
    10: {
      6: 90,
      7: 76,
      8: 62,
      9: 47,
      10: 34,
      11: 23,
      12: 18,
      13: 24,
      14: 36,
      15: 50,
      16: 64,
      17: 78,
      18: 92,
    },
    11: {
      6: 91,
      7: 78,
      8: 64,
      9: 51,
      10: 40,
      11: 31,
      12: 27,
      13: 32,
      14: 41,
      15: 53,
      16: 66,
      17: 80,
      18: 93,
    },
    12: {
      6: 94,
      7: 82,
      8: 68,
      9: 56,
      10: 44,
      11: 35,
      12: 31,
      13: 33,
      14: 41,
      15: 52,
      16: 64,
      17: 78,
      18: 90,
    },
  };

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [value, setValue] = useState("");
  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  const handleTimeChange = (date) => {
    setSelectedTime(date);
  };

  useEffect(() => {
    if (selectedMonth !== null && selectedTime !== null) {
      const mon = selectedMonth["$M"] + 1;
      setValue(Alldata[mon][selectedTime["$H"]]);
    }
  }, [selectedMonth, selectedTime]);
  console.log(selectedMonth);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold m-4 text-gray-700">
        Enter Month & Time
      </h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Month"
          views={["month"]}
          value={selectedMonth}
          onChange={handleMonthChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <div className="m-4"></div>
        <TimePicker
          label="Select Time"
          value={selectedTime}
          onChange={handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <h1 className="text-4xl font-semibold mt-4">
        solar Panel Angle: <span className="text-6xl">{value}&deg;</span>
      </h1>
    </div>
  );
}
