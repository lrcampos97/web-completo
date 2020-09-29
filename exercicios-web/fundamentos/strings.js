const escola = "Cod3r"

console.log(escola.charAt(4)); // retornar o char que está no index 4;
console.log(escola.charCodeAt(3)); // código relacionado a tabela UNICODE
console.log(escola.indexOf("r")) // retonar o index do valor

console.log(escola.substring(0,2)); //pegar valor em determinado range da string

console.log("Escola: ". concat(escola).concat("!")); // CONCATENAR STRING 
console.log("Escola: " + escola + "!"); // CONCATENAR STRING

console.log(escola.replace(3,'e')); // REPLACE 
console.log(escola.replace(/\w/g,'e')); //utilizando REGEX <----


console.log('Ana,Maria,Carlos'.split(',')); // gerar array apartir de uma string <----


/* 

    *** TEMPLATE STRING ****

    Utiliza a crase ao invés de aspas simples ou dupla
 
*/

const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá 
    ${nome} !`

console.log(template);

const up = texto => texto.toUpperCase(); // arrow function

console.log(`Ei... ${up('cuidado')} !!!`); // interpolação

