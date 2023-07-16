const toppings = document.getElementsByClassName("toppings");

function mostraClic(e) {
  console.log(e.target.innerText);
}

for (const topping of toppings) {
  topping.addEventListener("click", mostraClic);
}

const result = mostraClic();

console.log(result);
