const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3]) // consultando os valores  do array

valores [4] = 10  // adicionando mais um elemento no array
console.log(valores) 
console.log(valores.length) // para saber qnts elementos 

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // apaga o ultimo elemento do array
delete valores[0] // deleta um elemento do array atraves da posição dele
console.log(valores)

console.log(typeof valores) // o array é indentificado com um objeto