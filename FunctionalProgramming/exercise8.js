/**
 * Escribe el tuyo propio Array.prototype.myMap(), que debería comportarse exactamente como 
 * Array.prototype.map(). No debe utilizar el mapmétodo integrado. 
 * Su Array puede acceder a la instancia en el myMap método usando this.
 */

 Array.prototype.myMap = function(callback) {

    const newArray = [];
      this.forEach((element, index, originalArr) =>
        newArray.push(callback(element, index, originalArr))
      );
      return newArray;
    };