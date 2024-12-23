import { cancelSchedule } from "../../services/schedule-cancel.js";
import { daysSchedules } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const deleteIcon = event.target;
      const item = deleteIcon.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirmed = confirm("Deseja realmente cancelar o agendamento?");

        if (isConfirmed) {
          await cancelSchedule({ id });
          await daysSchedules();
        }
      }
    }
  });
});
