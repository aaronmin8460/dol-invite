import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function BirthdayCalendar({ birthday }) {
  const [value, setValue] = useState(new Date(birthday));

  const tileClassName = ({ date, view }) => {
    if (
      view === "month" &&
      date.toDateString() === new Date(birthday).toDateString()
    ) {
      return "bg-yellow-300 rounded-full text-black font-bold";
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto pointer-events-none select-none">
      <h2 className="text-lg font-semibold mb-2">날짜</h2>
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
      />
    </div>
  );
}
