export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];

export function calcularMedia(alumnos) {
  const totalNotas = alumnos.reduce((acumulador, alumno) => acumulador + alumno.nota, 0);
  return totalNotas / alumnos.length;
}

export function contarAprobados(alumnos) {
  return alumnos.filter((alumno) => alumno.nota >= 5).length;
}