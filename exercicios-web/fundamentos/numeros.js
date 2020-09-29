const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2);
console.log(Number.isInteger(peso1)); // verificar se é inteiro "Number.isInteger"

const avaliacao1 = 6.244
const avaliacao2 = 8.658


const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("Arredondar: ", media.toFixed(2)) //PARA ARREDONDAR <---

console.log("String: ", media.toString()) //Converter para STRING <---

console.log("Binário:", media.toString(2)) //Converter para BINÁRIO <---

console.log(typeof media)


/* 

  ALGUMAS EXCEÇÕES DO JAVASCRIPT

*/

console.log(7 / 0 ); // resultado é do tipo INFINITY
console.log("10" / 2); //NÃO TEM PROBLEMA FAZER ASSIM, OCORRE TUDO CERTO.
console.log("Show!" * 2 ); // ocorre o erro NaN (not a number)