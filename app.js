const readline = require("readline-sync");

const tasks = [];

function addTask() {
  const indicator = tasks.length + 1;
  const description = readline.question("Ingrese la descripcion de la tarea: ");
  tasks.push({ indicator, description, completed: false });
  console.log("Tarea añadida con éxito.");
}

function removeTask() {
  const indicator = readline.question(
    "Ingrese el indicador de la tarea que desea eliminar: "
  );
  const taskIndex = tasks.findIndex(
    (task) => task.indicator === parseInt(indicator)
  );
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    console.log("Tarea eliminada con éxito.");
  } else {
    console.log("No se encontró ninguna tarea con ese indicador.");
  }
}

function completeTask() {
  const indicator = readline.question(
    "Ingrese el indicador de la tarea que desea marcar como completada: "
  );
  const task = tasks.find((task) => task.indicator === parseInt(indicator));
  if (task) {
    task.completed = true;
    console.log("Tarea marcada como completada.");
  } else {
    console.log("No se encontró ninguna tarea con ese indicador.");
  }
}

function displayTasks() {
  console.log("Lista de tareas:");
  for (const task of tasks) {
    const status = task.completed ? "Completada" : "No Completada";
    console.log(`[${task.indicator}] ${task.description} - ${status}`);
  }
}

function main() {
  while (true) {
    console.log("\nOpciones:");
    console.log("1. Añadir tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Mostrar tareas");
    console.log("5. Salir");
    const choice = readline.question("Elige una opcion: ");

    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        displayTasks();
        break;
      case "5":
        process.exit(0);
      default:
        console.log("Opción no valida. Por favor, elige una opción valida.");
    }
  }
}

main();
