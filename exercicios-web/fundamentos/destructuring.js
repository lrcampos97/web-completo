// novo recurso do EC015

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua tal',
        numero: 10
    }
}

// operador destructuring pegando os valores de um objeto e atribuindo a uma variavel

const { nome, idade } = pessoa

console.log(nome, idade);


const { nome: n, idade: i } = pessoa
console.log(n, i);

// caso nao venha valor, ja deixa um por default
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

// utilizando destructuring por parametro

function rand({ min = 0, max = 1000}){ // PASSANDO UM DESTRUCTURING
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objeto = { max: 50, min: 40} ;
console.log(rand(objeto));
console.log(rand({ min: 555} ));