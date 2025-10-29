let texto = "hola hola hola un gusto con todos todos ustedes";

function contarPalabras (texto){
    let palabras = texto.split(" ");
    let frecuencia = new Map();
    for (let p of palabras){
        if(frecuencia.has(p)){
            frecuencia.set(p, frecuencia.get(p) + 1);
        } else {
            frecuencia.set(p, 1)
        }
    }
    return frecuencia;
}
console.log("Ejercicio 7");
console.log(contarPalabras(texto));