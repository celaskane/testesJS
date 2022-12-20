const numeros = [1, 2, 3, 4];

const saida = excessao(numeros, [1]);

console.log('saida', saida);

function excessao(array, excluido) {
    const saida = [];
    for (let elemento of array)
        if (!excluido.includes(elemento))
            saida.push(elemento);
    return saida;
}