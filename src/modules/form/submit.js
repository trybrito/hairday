import dayjs from "dayjs";
import { newSchedule } from "../../services/new-schedule.js";
import { daysSchedules } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const currentDate = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = currentDate;
selectedDate.min = currentDate;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const id = new Date().getTime();
    const name = clientName.value.trim();

    if (!name) {
      return alert("Por favor, informe o nome.");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione o horário de agendamento.");
    }

    const date = selectedDate.value;
    const [hourOnly] = hourSelected.innerText.split(":");

    const when = dayjs(date).add(hourOnly, "hour");

    await newSchedule({ id, name, when });
    await daysSchedules();

    clientName.value = "";
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento.");
  }
};
