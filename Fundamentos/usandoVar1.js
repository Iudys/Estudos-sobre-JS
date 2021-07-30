function teste() {
    var local = 123;
    console.log(local);
}

teste();
console.log(local);

// Var só é lido qnd está dentro de uma função, pq ela não foi definido como um atributo global
