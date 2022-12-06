/**
 * Utilice el sort método de la nonMutatingSort función para ordenar los elementos de una matriz 
 * en orden ascendente. La función debe devolver una nueva matriz y no mutar la globalArrayvariable.
 */

 const globalArray = [5, 6, 3, 2, 9];

 function nonMutatingSort(arr) {
   return [].concat(arr).sort(function(a, b) {
     return a - b;
     })
 } 
 
 nonMutatingSort(globalArray);