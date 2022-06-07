//Programa ai!
function imprimeImpares(array){
    odd = []
    for (i=0;i<array.length;i++){
      if ((array[i]%2 == 0) == false){
        odd.push(parseInt(array[i]));
      }
    }
    console.log(odd);
  }