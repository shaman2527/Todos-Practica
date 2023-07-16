const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const bottom = document.getElementById("bottom");

const listaDeNombre = ["robert", "jesus", "playa@gmail.com"];

let valores = [];
nombre.addEventListener("change", function () {
  valores.push(this.value);
  console.log(valores);
});

email.addEventListener("change", function () {
  valores.push(this.value);
  console.log(valores);
});

mensaje.addEventListener("change", function () {
  valores.push(this.value);
  console.log(valores);
});

bottom.addEventListener("click", function () {
  console.log(valores);
});

if (valores.nombre === listaDeNombre) {
  alert("Bienvenido");
}
