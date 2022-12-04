/**
 * En este desafío vas a usar Object.freezepara evitar que cambien las constantes matemáticas. 
 * Debe congelar el MATH_CONSTANTSobjeto para que nadie pueda modificar el valor de PI, agregar 
 * o eliminar propiedades.
 */

 function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();