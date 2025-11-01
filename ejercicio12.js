const empleados = [
  { id: 1, nombre: "Carlos", area: "Ciencias", salario: 3200 },
  { id: 2, nombre: "Elena", area: "Ciencias", salario: 3100 },
  { id: 3, nombre: "Rosa", area: "Literatura", salario: 2800 },
  { id: 4, nombre: "Miguel", area: "Computación", salario: 4000 }
];
function gestionarEmpleados(empleados){
    let mapa = new Map();
    for (let empleado of empleados) {
        let area = empleado.area;
        let nombre = empleado.nombre;
        let salario = empleado.salario;

         if (!mapa.has(area)) {
            mapa.set(area, { empleados: [], total: 0, cantidad: 0 });
        }
        let datosArea = mapa.get(area);
        datosArea.empleados.push(nombre);
        datosArea.total += salario;
        datosArea.cantidad++;
        mapa.set(area, datosArea);
    }
    let resultado = {};
    for (let [area, datos] of mapa) {
        let promedio = datos.total / datos.cantidad;
        resultado[area] = {
        empleados: datos.empleados,
        promedio: parseFloat(promedio.toFixed(2))
        };
    }
    return resultado;
}
console.log("Ejercicio 12");
console.log(gestionarEmpleados(empleados));