import { fetchSchedulesByDay } from "../../services/fetch-schedules-by-day.js";
import { showDaysSchedules } from "./show.js";
import { loadHours } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function daysSchedules() {
  const date = selectedDate.value;

  // busca na API os agendamentos cadastrados do dia
  const dailySchedules = await fetchSchedulesByDay({ date });

  showDaysSchedules({ dailySchedules });
  // renderiza horários disponíveis
  loadHours({ date, dailySchedules });
}
