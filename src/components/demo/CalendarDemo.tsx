import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Label } from "../ui/label";

export const CalendarDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col gap-4 mt-3">
      <Label className="text-lg font-bold">Calendar</Label>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-[250px]"
      />
    </div>
  );
};
