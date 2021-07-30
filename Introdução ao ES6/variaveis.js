const name = "Guilherme";

//Não podemos alterar o valor
//name = "Guilherme";

const user = {
    name: "Guilherrme",
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro Nome";

//Não podemos fazer o objeto "apontar " para outro lugar

//user = {
//    name: "Guilherme",
//};

const persons = ["Guilheme", "Pedro", "Jennifer"];

// Podeemos adicionar novos itens

persons.push("João");

// Podemos remover algum item

persons.shift();

// Podemos alterar diretamente

persons[1] = "James";

console.log("\n Array após as alterações: ", persons);
