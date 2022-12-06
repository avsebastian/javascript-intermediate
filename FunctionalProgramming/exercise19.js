/**
 * Use el splitmétodo dentro de la splitifyfunción para dividir stren una matriz de palabras. 
 * La función debe devolver la matriz. Tenga en cuenta que las palabras no siempre están 
 * separadas por espacios y que la matriz no debe contener signos de puntuación.
 */

 function splitify(str) {
  return str.split(/\W/);
  }
  
  splitify("Hello World,I-am code");