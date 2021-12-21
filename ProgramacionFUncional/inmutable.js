//const  juan = {
//    nombre:  "Juan",
//    apellido: "Rodriguez",
//    edad: 30,
//    direccion :{
//        departamento: "Guatemala",
//        municipio: "Guatemala"
//    }
//}
//
////{1} crea una copia del objeto sin copiar su referencia
////const juan2 = Object.assign({},juan,{apellido:"Perez"});
//
////{2} sintaxis equivalesnte a {1} --split operator
//const juan2 = {
//    ...juan,
//    apellido:"Perez",
//    telefono:"123456",
//    direccion: {
//        ...juan.direccion,
//        municipio: "Santa Catarina pinula",
//        aldea: "Barcenas"
//
//    }
//};
//
//
//console.log("juan ",juan);
//console.log("juan2 ",juan2);

//*******Arreglos Inmutables */
const numeros = [1,2,3];

const numeros2 = [0,...numeros,4];

const index = numeros.indexOf(2);
const numeros3 = [
    ...numeros.slice(0,index),
    1.5,
    ...numeros.slice(index)
];

const numeros4 = numeros.filter(x=>x!=2);
const numeros5 = numeros.map(x=> x==2 ? 100:x);

console.log("numeros ",numeros);
console.log("numeros2 ",numeros2);
console.log("numeros3 ",numeros3);
console.log("numeros4 ",numeros4);
console.log("numeros5 ",numeros5);