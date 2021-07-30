const a = { name: "Teste" };
// = undefined
console.log(a);
// {name: 'Teste}

const b = a;
console.log(b);

//  referencia : a const a possui o endereço e qnd atribuo o b, ele passa tbm a receber o msm enderço
// apotam para o mesmo lugar

b.name = "Opa";

console.log(a);
console.log(b);

// Com objetos a passagem é por referencia , com valores primitivos como boolean, numeros ele pega o valor
//-------------------------------------------------------------------------------------------------------------------------------------
//null

let valor; // não inicializado
console.log(valor);
valor = null; // ausência de valor
console.log(valor);
//console.log(valor.toString()) // Error!

const produto = {};
console.log(produto.preco); // vai dar undefined pq não esta referenciado o valor do produto
console.log(produto);
produto.preco = 3.5;
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);
