function invertirMap(map) {
  let nuevo_map = new Map();
  for (let [clave, valor] of map) {
    nuevo_map.set(valor, clave);
  }
  return nuevo_map;
}
let original = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);

let invertido = invertirMap(original);
console.log("Ejercicio 8");
console.log(invertido);

