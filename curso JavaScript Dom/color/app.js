const boton = document.querySelector("#boton-color");
const color = document.getElementById("color");

function generarColorAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAletorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAletorio];
  }
  return colorHex;
}

boton.addEventListener("click", () => {
  let colorAleatorio = generarColorAleatorio();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});
