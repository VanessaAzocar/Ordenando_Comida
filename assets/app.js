window.onload = function (){
/*Imagina que estás pidiendo comida en un restaurante. 
Tu plato favorito es ceviche, así que lo elegirías si está en el menú.
Si no hay ceviche, elegirías tacos al pastor. 
Si eso no está, te irías por empanada chilena.
En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. 
Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú,
decidas qué ordenar.*/


alert ("¡Bienvenido al Restaurant SUPERWENO!");
let hamburguer = "hamburguesa";

let food= prompt ("¿Qué quieres ordenar?");

do {
    
if (food==hamburguer){
alert("SUPERWENO realiza tu pedido");
switch (food){
    case hamburguer:
    alert("pagame $4.500");
    break; 
}
} else {
alert ("SUPERWENO no tiene este platillo");
food= prompt ("¿Qué quieres ordenar?");
}
} while(food!==hamburguer);
}
