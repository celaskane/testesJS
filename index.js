const numeros = [1, 2, 3, 4, 1, 1];

const contagem = contaOcorrencias(numeros, 1);

console.log(contagem);

function contaOcorrencias(array, procuraElemento) {
    /* let contagem = 0
    for (let elemento of array)
        if (elemento === procuraElemento)
            contagem++;
    return contagem; */

    return array.reduce((acumulador, atual) => {
        const ocorrencia = (atual === procuraElemento) ? 1 : 0;
        console.log(acumulador, atual, procuraElemento);
        return acumulador + ocorrencia;
    }, 0);
}