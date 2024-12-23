import { daysSchedules } from "../schedules/load.js";

const selectedDate = document.getElementById("date");

selectedDate.onchange = () => {
  daysSchedules();
};
