/**
 * Use el joinmétodo (entre otros) dentro de la sentensifyfunción para hacer una oración a 
 * partir de las palabras en la cadena str. La función debe devolver una cadena. 
 * Por ejemplo, I-like-Star-Warsse convertiría a I like Star Wars. Para este desafío, 
 * no utilice el replacemétodo.
 */

 function sentensify(str) {
  
  return str.split(/\W/).join(" ");
  }
  
  sentensify("May-the-force-be-with-you");