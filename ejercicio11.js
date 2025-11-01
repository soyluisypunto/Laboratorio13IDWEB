let tiendaA = new Map([
  ["laptop", 3500.5],
  ["mouse", 100.35],
  ["teclado", 250.9]
]);
let tiendaB = new Map([
  ["mouse", 95.2],
  ["monitor", 720.457],
  ["teclado", 260.1]
]);

function combinarCatalogos (tiendaA, tiendaB){
    let tienda_combinada = new Map();
     for (let [producto, precio] of tiendaA) {
        tienda_combinada.set(producto, parseFloat(precio.toFixed(2)));
    }
     for (let [producto, precioB] of tiendaB) {
        let precioA = tienda_combinada.get(producto);

        if (precioA !== undefined) {
            let precioMasBajo = Math.min(precioA, precioB);
            tienda_combinada.set(producto, parseFloat(precioMasBajo.toFixed(2)));
        } else {
            tienda_combinada.set(producto, parseFloat(precioB.toFixed(2)));
        }
    }
    return tienda_combinada;
}
console.log("Ejercicio 11");
console.log(combinarCatalogos(tiendaA, tiendaB));