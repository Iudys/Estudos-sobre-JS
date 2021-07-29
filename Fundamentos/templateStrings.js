const nome='Rebeca'
const contatenacao = 'Olá ' + nome + '!'
const template =  `
    olá
    ${nome}`
    console.log(contatenacao, template)

    //expressões...
    console.log(`1 + 1 = ${1 +1}`) // crase seve para bugar minha mente kkk e utilizar o $

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`)