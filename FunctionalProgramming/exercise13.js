/**
 * Use el concatmétodo en la nonMutatingConcatfunción para concatenar attachhasta el final de original. 
 * La función debe devolver la matriz concatenada.
 */

 function nonMutatingConcat(original, attach) {
  
  return original.concat(attach);
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);