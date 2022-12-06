/**
 * Use el everymétodo dentro de la checkPositivefunción para verificar si cada elemento arres positivo. 
 * La función debe devolver un valor booleano.
 */

 function checkPositive(arr) {
  return arr.every(val => val > 0);
  }
  
  checkPositive([1, 2, 3, -4, 5]);