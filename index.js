const numeros = [1, 2, 3, 4];

const saida = movimenta(numeros, 0, 1);

console.log('saida', saida);

function movimenta(array, index, offset) {
    const posicao = index + offset;
    if (posicao >= array.length || posicao < 0) {
        console.log('Inválido');
        return;
    }
    const saida = [...array];
    const elemento = saida.splice(index, 1)[0];
    saida.splice(posicao, 0, elemento);
    return saida;
}