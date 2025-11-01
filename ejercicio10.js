function contarLetras(texto) {
    let resultado = {};

    texto = texto.toLowerCase().replace(/\s+/g, '');

    for (let letra of texto) {
        if (resultado[letra]) {
            resultado[letra]++;  
        } else {
            resultado[letra] = 1;
        }
    }

    return resultado;
}
console.log("Ejercicio 10");
console.log(contarLetras("Banana"));
