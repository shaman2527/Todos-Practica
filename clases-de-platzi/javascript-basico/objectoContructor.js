// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// var nuevoAuto = [];
// var registro = [];

// function auto(marca, modelo, annio) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.annio = annio;
// }

// rl.question("Cuantos autos quieres agregar? ", function (numeroDeAutos) {
//   for (let i = 0; i < numeroDeAutos; i++) {
//     rl.question(
//       "Cual es la marca del auto " + (i + 1) + "? ",
//       function (marca) {
//         rl.question(
//           "Cual es el modelo del auto " + (i + 1) + "? ",
//           function (modelo) {
//             rl.question(
//               "Cual es el annio del auto " + (i + 1) + "? ",
//               function (annio) {
//                 nuevoAuto.push(new auto(marca, modelo, annio));
//                 if (i == numeroDeAutos - 1) {
//                   rl.close();
//                 }
//               }
//             );
//           }
//         );
//       }
//     );
//   }
// });

// rl.on("close", function () {
//   console.log(nuevoAuto);
//   process.exit(0);
// });

const result = function solution(car) {
  if (car.licensePlate === null || car.licensePlate === undefined) {
    car.drivingLicense = false;
  } else {
    car.drivingLicense = true;
  }
  return car;
};

console.log(result({}));
