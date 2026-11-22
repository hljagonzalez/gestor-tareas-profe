import "./style.css";
import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

const titulo = document.querySelector("h1");
titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

const resumen = document.querySelector("#resumen");
resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;

//Lista temporal para probar  getElementById. Luego la borraremos
const lista = document.querySelector("#lista");
// creo tres li y les asigno un texto cualquiera
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Tarea ${i + 1}`;
  li.classList.add("demo");
  lista.appendChild(li);
}

lista.querySelectorAll("li").forEach(li => {li.textContent = `- ${li.textContent}`;});

const byclassname = document.getElementsByClassName("demo");

// byclassname.forEach(li => {
//   li.textContent = li.textContent.replace("-", "✓");
//   li.classList.add("completada")})

// byclassname.forEach is not a function

// recorro la colección de elementos y modifico el - por ✓ con Array.from
Array.from(byclassname).forEach(li => {
  li.textContent = li.textContent.replace("-", "✓");
  li.classList.add("completada")});

// La HTML collection es Viva, lo que significa que si añades o quitas nodos del DOM, la colección se actualiza sola. La NodeList de querySelectorAll es una foto fija del momento en que la pediste.









