/**
 * Use el somemétodo dentro de la checkPositivefunción para verificar si algún elemento arres positivo. 
 * La función debe devolver un valor booleano.
 * 
 */

function checkPositive(arr) {
  return arr.some(elem => elem > 0);
  }
  
  checkPositive([1, 2, 3, -4, 5]);