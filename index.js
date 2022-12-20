const numeros = arrayDoIntervalo(1, 4);

console.log('numeros', numeros);

function arrayDoIntervalo(min, max) {
    const saida = [];
    for (let i = min; i <= max; i++)
        saida.push(i);
    return saida;
}