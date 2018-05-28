window.onload = function (){
/*Imagina que estás pidiendo comida en un restaurante. 
Tu plato favorito es ceviche, así que lo elegirías si está en el menú.
Si no hay ceviche, elegirías tacos al pastor. 
Si eso no está, te irías por empanada chilena.
En el caso raro que ninguna de esas opciones esté disponible, te irías por una hamburguesa. 
Escribe una función, que de acuerdo a la disponibilidad de los platos en el menú,
decidas qué ordenar.*/


alert ("¡Bienvenido al Restaurant!");

switch (prompt ("¿Qué quieres ordenar?")){
   
case "ceviche": 
alert("Ceviche no tenemos disponible");
prompt("¿Alguna otra cosa?");

case "tacos al pastor":
alert("No tenemos ese tipo de Tacos");
prompt("¿Otra cosa?");

case "empanada chilena":
alert("Se nos acabaron");
prompt("Danos otra oportunidad");
case "hamburguesa":
alert("¡Sí tenemos disponible\n \n Págame $5.500"  );

}
alert("Tú hambuerguesa se está preparando")


}