let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    detalles: function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
};
console.log("Ejercicio 9");
auto.detalles();
