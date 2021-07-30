const user = {
    name: "Guilherme",
    lastName: "Cabrini da Silva",
};

function getUserWithFullName(user) {
    return {
        ...user, //speed operador , para cada propriedade
        fullName: `${user.name} ${user.lastName}`, // ${} um jeito mais facil de concatenar
    };
}

const userwithFullName = getUserWithFullName(user);
console.log(userwithFullName);
