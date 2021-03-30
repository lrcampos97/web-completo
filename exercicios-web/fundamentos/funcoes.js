//funcao sem retorno

function imprimirSoma(a, b){
 console.log(a + b);    
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2,6,5,9,7,2,3,6) // vai considerar apenas os dois primeiros

// funcao com retorno 
function somar(a, b = 0){
    return a + b
}

console.log(somar(2,3));
console.log(somar(2));

//NaN = Not a Number

// ARMAZENAR FUNCAO EM VARIAVEL

const realizarSoma = function(a,b){ // função anonima, sem nome
   console.log(a+b);
}

realizarSoma(2,3);

// armazenando uma funcao ARROW em uma variavel
const soma = (a, b) => {
 return a + b
}

console.log(soma(2, 50));


// retorno implícito
const subtracao = (a, b) => a - b; // uma unica linha (nao precisa dar return)

console.log('subtracao: ', subtracao(20,6));

const imprimir = a => console.log(a);
imprimir('Legaal');


