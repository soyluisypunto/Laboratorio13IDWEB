let productos = new Map ([
    ["pan", 3.5],
    ["leche", 5],
    ["arroz", 12],
    ["azucar", 7.2]
]);
let total = 0;
for (let n of productos.values()){
    total +=n;
}
console.log("Ejercicio 6");
console.log(`Precio total: ${total}`);
