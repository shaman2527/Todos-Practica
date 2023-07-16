var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: "2020",
  descripcion: function () {
    return `Marca es ${this.marca}\n Modelo ${this.modelo}\n Año es ${this.annio}`;
  },
};

console.log(miAuto.descripcion());
