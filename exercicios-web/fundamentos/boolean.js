let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);


isAtivo = 1 // pode valer como Boolean

console.log(!!isAtivo); //converter algo em boolean, para saber se é verdadeiro ou nao (NEGAR DUAS VEZES)


console.log("Os verdadeiros.....");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log("Os falsos.....");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log("pra finalizar.....");

let nome = '';
console.log(nome || 'Desconhecido');
