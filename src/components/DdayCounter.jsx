import { useEffect, useState } from "react";

export default function DdayCounter({ date }) {
  const [dday, setDday] = useState("");

  useEffect(() => {
    const target = new Date(date);
    const today = new Date();
    const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
    setDday(diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`);
  }, [date]);

  return <p className="text-xl font-bold text-center ">{dday}</p>;
}
