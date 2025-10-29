let oracion = "Hola con todos"
function reordenarPalabras(oracion){
   let palabras = oracion.split(" ");
   let mayusculas = [];
   for( let i of palabras){
    mayusculas.push(i.toUpperCase());
   }
   mayusculas.sort();
   return mayusculas;
}
console.log("Ejercicio 3");
console.log(reordenarPalabras(oracion));