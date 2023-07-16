// if (usuario.edad > 17) {
//   console.log("usuario es mayor de edad puede entrar al concierto");
// } else {
//   console.log("No es mayor de edad , asi que no puede entrar");
// }

// if (usuario.edad >= 18 && usuario.ticket) {
//   console.log("El usuario es mayor de edad tiene un ticket");
// } else {
//   console.log("Es menol de edad no tiene un ticket");
// }

const usuario = {
  edad: 17,
  pais: "mexico",
  ticket: false,
};

// if (usuario.edad >= 18) {
//   if (usuario.ticket) {
//     console.log("El usuario es mayor edad y tiene un ticket");
//   } else {
//     console.log("El usuario es mayor de edad pero no tiene ticket");
//   }
// } else {
//   console.log("El usuario es menol de edad no puede entrar");
// }
if (usuario.pais === "mexico") {
  console.log("El usuario es mexicano");
} else if (usuario.pais === "colombia") {
  console.log("Es colombiano");
} else {
  console.log("Eres de venezuela");
}
