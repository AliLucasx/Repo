
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [numero0, , numero2, , numero4, ...restoNumeros] = numeros;


const nuevoArray = [...restoNumeros];

console.log("Valores en las posiciones 0, 2 y 4:");
console.log(numero0);
console.log(numero2);
console.log(numero4);

console.log("Resto de los valores numéricos:");
console.log(nuevoArray);


let mascota = {
  nombre: "Lana",
  tipo: "Gato",
  color: "Gris claro con manchas negras y blanca",
  raza: "Mestizo"
};

let { nombre, tipo, color, raza } = mascota;
console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);
