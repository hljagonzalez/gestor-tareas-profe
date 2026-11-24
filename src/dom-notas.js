import { alumnos, calcularMedia, contarAprobados } from "./notas.js";


export function renderNotas() {
  const listaNotas = document.querySelector("#lista-notas");
  //La lista de notas debe salir ordenada de mayor a menor nota. Para ello, se puede usar el método sort() del array de alumnos.
  
//   const alumnosOrdenados = [...alumnos].sort((a, b) => b.nota - a.nota);
  listaNotas.replaceChildren();
  for (const alumno of alumnos.sort((a, b) => b.nota - a.nota)) {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} - ${alumno.nota}`;
    li.classList.add(alumno.nota >= 5 ? "aprobado" : "suspenso");
    listaNotas.append(li);
  }
  const resumenNotas = document.querySelector("#resumen-notas");

  resumenNotas.textContent = `Promedio de notas: ${calcularMedia(alumnos)}, Aprobados: ${contarAprobados(alumnos)} de ${alumnos.length}`;
}
