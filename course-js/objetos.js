const personaArreglo = ["carlos", 27, "correo@correo.com", true];
const persona = {
  nombre: "Robert",
  edad: 32,
  correo: "correo@correo.com",
  suscripciones: {
    Web: true,
    correo: true,
  },
  coloresFavoritos: ["Morado", "Rojo"],
  saludo: function () {
    console.log("Hola Mundo, Bienvenido");
  },
};

// console.log(persona.coloresFavoritos);
// console.log(persona["edad"]);

const variable = "suscripciones";
// console.log(persona[variable]);

persona.pais = "Venezuela";
persona.pais = "Carcas Venezuela";
persona.saludo();
console.log(persona);
