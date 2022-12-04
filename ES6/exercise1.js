/**
 * Corrija el código para que lo ideclarado en la ifdeclaración sea una variable separada de ila declarada 
 * en la primera línea de la función. Asegúrese de no usar la varpalabra clave en ninguna parte de su código.
 */

 function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }