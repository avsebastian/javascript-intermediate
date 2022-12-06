/**
 * Reescriba la función nonMutatingSpliceutilizando sliceen lugar de splice. Debería limitar la citiesmatriz proporcionada a una longitud de 3 y 
 * devolver una nueva matriz con solo los tres primeros elementos.
 */

 function nonMutatingSplice(cities) {
    const newArr = cities.slice(0,3);
    return newArr;
}
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);