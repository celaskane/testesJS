const numeros = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    /* let max = array[0];

    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    return max; */

    array.reduce((acumulador, atual) => (atual > acumulador) ? acumulador : atual);
}