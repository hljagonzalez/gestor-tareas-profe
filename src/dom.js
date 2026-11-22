import { estado } from './estado.js';
import { contarPendientes, contarCompletadas } from './tareas.js';


export function render(){
    //vacio la lista con replaceChildren
    const lista = document.querySelector("#lista");
    const resumen = document.querySelector("#resumen");

    lista.replaceChildren();

    //recorro el array de tareas y creo un li por cada tarea
    estado.tareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;
        if (tarea.completada) {
            li.classList.add("completada");
        }
        lista.append(li);
    });

}
  const pendientes = contarPendientes(estado.tareas);
  const completadas = contarCompletadas(estado.tareas);
  resumen.textContent = `Tienes ${pendientes} tareas pendientes y ${completadas} completadas`;