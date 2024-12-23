import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Corte agendado!");
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível realizar o agendamento. Por favor, tente novamente mais tarde."
    );
  }
}
