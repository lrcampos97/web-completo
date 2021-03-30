function teste(){
    var local = 'teste'
    console.log('Aqui exibe: ', local);
}

teste()


//console.log('Aqui nao exibe: ', local); // local is not defined

// OBJETO WINDOW DENTRO DO BROWSER, POSSUI TODAS AS VARIAVEIS GLOBAIS.

// VAR não tem escopo de bloco

// utilizando LET
var numero = 1
{
    let numero = 2 // restrito a ao escopo
    console.log('dentro=',numero);
}

console.log('fora=',numero);

// ARRAY COM FUNÇÃO 

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
    
}

funcs[2]()
funcs[8]()