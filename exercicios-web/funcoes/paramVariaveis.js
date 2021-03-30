
function soma() {
    let soma = 0;

    for (i in arguments){ // pegar parâmetros  mesmo sem a declaração dos mesmos
     soma += arguments[i];   
    }

    return soma;
}

console.log(soma());
console.log(soma(3));
console.log(soma(3, 2));

