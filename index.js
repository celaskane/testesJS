const localizazao = {
    rua: 'Av. Paulista',
    cidade: 'São Paulo',
    cep: '01310-200'
};

function mostraLocalizacao(localizazao) {
    for (let key in localizazao)
        console.log(key, localizazao[key]);
}
mostraLocalizacao(localizazao);