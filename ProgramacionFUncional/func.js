
//*************Inicio Funciones que retornan otras funciones
//function mensaje(prefijo) 
//{
//    return function (texto) 
//    {
//        return prefijo + " "+ texto;
//    }
//}
//
//const  bienvenida = mensaje("hola");
//const  despedida = mensaje("adios");
//
//console.log(bienvenida("mundo"));
//console.log(despedida("mundo"));
//*************Fin Funciones que retornan otras funciones


//*************Inicio Funciones como parametro
//function mensaje(prefijo,formateador) 
//{
//    return function (texto) 
//    {
//        return formateador(prefijo,texto);
//    }
//}
//
//const formatoBievenida = function (prefijo, texto) 
//{
//   return "!"+prefijo+" "+texto+"!" ;
//}
//
//const formatoDespedida = function (prefijo, texto) 
//{
//   return "!"+prefijo+" "+texto+"... :(" ;
//}
//
//const  bienvenida = mensaje("hola",formatoBievenida);
//const  despedida  = mensaje("adios",formatoDespedida);
//
//console.log(bienvenida("mundo"));
//console.log(despedida("mundo"));
//*************Fin Funciones como parametro

//*************Inicio Funciones como parametro Arrow functions
const mensaje = (prefijo,formateador) => (texto) => formateador(prefijo,texto); 

const  bienvenida = mensaje("hola",(a, b) => `"!${a} ${b} !` );
const  despedida  = mensaje("adios",(a, b) => `"!${a} ${b}... :(`);

console.log(bienvenida("mundo"));
console.log(despedida("mundo"));
//*************Fin Funciones como parametro Arrow functions

