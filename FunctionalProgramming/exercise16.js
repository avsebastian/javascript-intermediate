/**
 * Complete el código de la squareListfunción usando cualquier combinación de map(), filter()y reduce(). 
 * La función debe devolver una nueva matriz que contenga los cuadrados de solo los números enteros 
 * positivos (los números decimales no son enteros) cuando se le pasa una matriz de números reales. 
 * Un ejemplo de una matriz de números reales es [-3, 4.8, 5, 3, -3.2].
 */

 const squareList = (arr) => {
    return arr
            .filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);