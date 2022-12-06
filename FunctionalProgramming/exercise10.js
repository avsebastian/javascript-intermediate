/**
 * Escribe el tuyo propio Array.prototype.myFilter(), que debería comportarse exactamente como 
 * Array.prototype.filter(). No debe utilizar el filtermétodo integrado. Se Arraypuede acceder a 
 * la instancia en el myFiltermétodo usando this.
 */

 Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this)) === true) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  };