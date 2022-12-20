const numeros = [1, 2, 3, 4];

console.log(includes(numeros, 3));

function includes(array, elementoProcurado) {
    for (let elemento of array)
        if (elemento === elementoProcurado)
            return true;
    return false;
}