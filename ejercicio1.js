const conjunto = [1, 3, 5, 7, 9];
function doblarNumeros (numeros){
    const nuevo_array = new Array();
    for (let n of numeros){
        n *= 2;
        nuevo_array.push(n);
    }
    return nuevo_array;
}
console.log("Ejercicio 1");
console.log(doblarNumeros(conjunto));