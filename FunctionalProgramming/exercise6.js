/**
 * Vuelva a escribir el código para que la matriz global bookListno cambie dentro de ninguna función. 
 * La add función debe agregar lo dado bookNameal final de la matriz que se le pasó y devolver una nueva 
 * matriz (lista). La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.

Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del 
bookNameparámetro.
 */

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr]; 
  newArr.push(bookName); 
  return newArr; 
}
  

function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr; 
  }
}