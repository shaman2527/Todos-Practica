// const usuario = {
//   nombre: "",
//   pais: "venezuelo",
// };
// console.log(usuario.nombre); // Robert

// switch (usuario.pais) {
//   case "Venezuela":
//     console.log("Es venezolano");
//     break;
//   case "Colombiano":
//     console.log("es Colombiano");
//     break;
//   case "argentina":
//     console.log("Soy argentino");
//     break;
//   default:
//     console.log("Es usuario es de otro lado");
// }

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Ingrese una palabra: ", (busqque) => {
  switch (busqque) {
    case "robert":
      console.log("es Robert y es de Venezuela");
      break;
    case "naty":
      console.log("Es mujer y es su esposa");
      break;
  }

  console.log(busqque);
  readline.close();
});
