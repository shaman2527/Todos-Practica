const boletos = "regular";
const codigoDeAcceso = boletos === "vip" ? "VIP-123-456" : "REGULAR-456-789";
boletos === "vip" ? console.log("Tu boleto es de tipo vip") : "REGULAR-456-789";

console.log(codigoDeAcceso);
console.log(typeof codigoDeAcceso);
