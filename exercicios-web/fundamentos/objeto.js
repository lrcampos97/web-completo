
// criar dinamicamente
const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 100.55
prod1['Desconto legal'] = 0.40 // evitar nome com espaço

console.log(prod1);


const prod2 = {
    nome: 'Camisa',
    valor: 45.90,
    obj: {
        cdCategoria: 5,
        descricao: 'categoria',
        modelo: {
           cdModelo: 12,
           descricao: 'teste' 
        }
    }
}

console.log(prod2);