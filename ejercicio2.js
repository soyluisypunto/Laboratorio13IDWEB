let conjunto2 = [1, -2, 4, -7, 9, -12];
function filtrarYTransformar (arr){
    let suma = 0;
    for (let i = 0; i < arr.length ; i++){
        if(arr[i] < 0){
            arr.splice(i , 1);
            i--;
        } else {
            arr[i]= arr[i] ** 2;
        }
    }
    for (let n of arr){
        suma += n;
    }
    return suma;
}
console.log("Ejercicio 2");
console.log(filtrarYTransformar(conjunto2));
