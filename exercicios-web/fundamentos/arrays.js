const valores = [7.7,8.9,6.3,9.2]

console.log(valores[0], valores[3])

valores[4] = 10;


valores[10] = 80;

console.log('Total elementos: ', valores.length);

// add novos valores
valores.push({id: 3}, false, null, 'teste')

console.log(valores);

// retirar do array o valor na última posição
console.log(valores.pop());
console.log(valores);

// retirar elemento de qualquer posição 
delete valores[1];
console.log(valores);

// type of 
console.log(typeof valores);