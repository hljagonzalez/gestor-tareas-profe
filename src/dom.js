import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  //const lista = document.getElementById("#lista");
  //1.- Da error porque el id no lleva #, solo se usa en querySelector.
  const lista = document.getElementById("lista");

  const resumen = document.querySelector("#resumen");

  // 2.-hay que sacar replaceChildren() del for.
  lista.replaceChildren();

  for (const tarea of estado.tareas) {
    //  lista.replaceChildren();

    const li = document.createElement("li");
    li.textContent = tarea.texto;
    // if (tarea.completada = true) {
    // 3.- = true asigna, lo que que se quiere es comparar con true.
    if (tarea.completada) {
      li.classList.add("completada");
    }
    lista.append(li);
  }
  console.log(estado.tareas);

  // 4.- La función contarPendientes está mal llamada, ya que no se le pasan los argumentos necesarios. Se debe pasar el array de tareas.
  resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;
}

