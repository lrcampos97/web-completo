const pessoa = { 
    saudacao: 'Boa noite!',
    falar() {
        console.log(this.saudacao);
    }
}


pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas NAO FUNCIONA


// correto a fazer utilizando BIND <- 
const falarDePessoa = pessoa.falar.bind(pessoa) // fazer com que a função de fato aponte para aquele componente do parametro
falarDePessoa()


function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade);
    }.bind(this),1000);

}

//new Pessoa;