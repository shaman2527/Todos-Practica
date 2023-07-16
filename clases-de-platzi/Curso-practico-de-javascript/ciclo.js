const tipoDeSuscripciones = {
  free: "Solo puede tomar los cursos gratis",
  basic: "Puede tomar los cursos gratis y los premium",
  premium: "Puede tomar todos los cursos",
  enterprise: "Puede tomar todos los cursos",
};
function suscripcion(suscripcion) {
  if (tipoDeSuscripciones[suscripcion]) {
    // console.log(tipoDeSuscripciones[suscripcion]);
    return tipoDeSuscripciones[suscripcion];
  }
  console.warn("La suscripcion no existe");
}

console.log(suscripcion("basic"));
