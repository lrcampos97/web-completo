// arrow function
const resultado = nota => nota >= 7 ? 'Aprovou' : 'Reprovado'

// ou assim
// const resultado = nota => {
//     return  nota >= 7 ? 'Aprovou' : 'Reprovado'
// }

console.log(resultado(7.1));
console.log(resultado(6.1));
