import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hoursList = document.getElementById("hours");

export function loadHours({ date, dailySchedules }) {
  hoursList.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const hours = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");
    const isFutureHour = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    const available = !unavailableHours.includes(hour) && isFutureHour;

    return {
      hour,
      available,
    };
  });

  hours.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour", available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;

    if (hour === "9:00") {
      addHoursHeader("Manhã");
    } else if (hour === "12:00") {
      addHoursHeader("Tarde");
    } else if (hour === "18:00") {
      addHoursHeader("Noite");
    }

    hoursList.appendChild(li);
  });

  function addHoursHeader(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hoursList.appendChild(header);
  }

  hoursClick();
}
