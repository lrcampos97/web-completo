function tratarErro(erro){
    //throw erro;
    //throw new Error('...')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}


function imprimeNome(obs) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');
    } catch (error) {
        tratarErro(error);
    } finally {
        console.log('sempre é executado');
    }
}

const pessoa = {nome: 'Felipe'}

imprimeNome(pessoa)