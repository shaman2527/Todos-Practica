var articulo = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
  { nombre: "Mouse", costo: 700 },
  { nombre: "Cable", costo: 300 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
  { nombre: "Mouse", costo: 700 },
  { nombre: "Cable", costo: 300 },
];

// articulo.forEach(function (articulo) {
//   console.log(articulo.nombre.split("       "));
// });

var articulosBaratos = articulo.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

console.log(articulosBaratos);
