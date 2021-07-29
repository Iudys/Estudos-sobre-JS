const escola = "cod3r"
console.log(escola.charAt(4)) //quarta letra  da palavra "cod3r"
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3)) // codigo html do numero 3 = codigo relacionado

console.log(escola.substring(1)) // remove a primeira letra e comeca a partir da segunda
console.log(escola.substring(0,3)) // começa da primeira letra e remove a 3 em diante

console.log("Escola " .concat(escola).concat("!")) // alternativa para concatenar
console.log('escola ' + escola + '!') // contatenar (o + com string contatena, com numeros soma) obs: a string tem mais força

console.log('Ana, Maria, Pedro' .split(',')) 