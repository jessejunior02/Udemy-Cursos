// const a = {name: 'Teste'};
// console.log(a);

// const b = a;
// b.name = 'Opa'
// console.log(a);
 //Diferente de objeto
// let c = 3;
// let d = c;
// d++
// console.log(d);
// console.log(c);

let valor; // Não inicializada
console.log(valor);

valor = null;  // Ausência de valor
console.log(valor);
//console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined ;// Evite atribuir Underfined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto)