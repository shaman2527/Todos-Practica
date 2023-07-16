const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const clasP = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(h1);

console.log(input.value);
input.value = "Hola mundo";
console.log({
  h1,
  p,
  clasP,
  pid,
  input,
});

h1.innerText = "Hola mundo desde Javascript";
h1.innerHTML = "Hola mundo desde Javascript2";
h1.style.background = "red";
h1.classList.add("rojo");
h1.classList.remove("verde");

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://th.bing.com/th/id/R.a239e9a711a7a437a5d0d2347e117704?rik=80swHahV9J2cpA&riu=http%3a%2f%2fwww.youloveit.ru%2fuploads%2fgallery%2fmain%2f69%2fshaman-king-oboi19_2.jpg&ehk=aatAJY1J%2f%2fS4HA2T61oqaPRXadSGauYjI4hIWJewkyM%3d&risl=&pid=ImgRaw&r=0"
);
console.log(img);
pid.innerHTML = "";
pid.append(img);
pid.style.width = "200px";
console.log(pid);
// console.log(clasP);
// console.log(pid);
