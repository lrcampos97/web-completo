let valor // nao inicializada 

console.log(valor);


valor = null // ausencia de valor (nao aponta para nenhum objeto na memoria)

console.log(valor);

const produto = {}
console.log(produto.preco); // undefined

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evitar atribuir

// tirar o atributo de um obeto 

delete produto.preco

console.log(produto);