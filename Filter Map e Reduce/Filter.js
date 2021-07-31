const pets = [
    {
        name: "rex",
        type: "dog",
        age: 10,
    },
    {
        name: "miau",
        type: "cat",
        age: 2,
    },
    {
        name: "gulp",
        type: "fish",
        age: 2,
    },
];
//filtro para criar um array com novos elementos
const newPets = pets.filter((pet) => {
    return pet.age < 5;
});

console.log(newPets);

// outros modos de filtrar
//const eMenorQueCinco = (numero) => {
//    return numero < 5
//}
//const newPets = pets.filterr(({ age}) => eMenorQueCinco(age)) // reduzindo a sintaxe
