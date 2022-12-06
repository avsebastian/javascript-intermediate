/**
 * Rellene el cuerpo de la addfunción para que use curry para agregar parámetros x, yy z.
 */

 function add(x) {
   return y => z => x + y + z;
  }
  
  add(10)(20)(30);