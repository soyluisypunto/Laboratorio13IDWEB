let numeros_5 = [2, 3, 2, 1, 6, 4];
let numeros_6 = [1, 6, 4];
function tieneDuplicados(arr){
    let arreglo_sin_duplicar = new Set(arr);
    if(arr.length !== arreglo_sin_duplicar.size){
        return true;
    } else {
        return false;
    }
}
console.log("Ejercicio 5");
console.log(tieneDuplicados(numeros_5) + "\n" + tieneDuplicados(numeros_6));