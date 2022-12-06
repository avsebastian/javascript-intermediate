/**
 * Use el slicemétodo en la sliceArrayfunción para devolver parte de la animmatriz dados los 
 * beginSliceíndices endSliceproporcionados. La función debe devolver una matriz.
 */

 function sliceArray(anim, beginSlice, endSlice) {
  const newArr = anim.slice(beginSlice,endSlice);
  return newArr;
 }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);