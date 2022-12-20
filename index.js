const localizazao = {
    rua: 'Av. Paulista',
    cidade: 'São Paulo',
    cep: '01310-200'
};

//Factor
function mostraLocalizacao(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep
    };
}
let enderezo = mostraLocalizacao('a', 'b', 'c');
console.log('enderezo', enderezo);

//Construction
function MostraLocalizacao(rua, cidade, cep) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
    
}
const endereco1 = new MostraLocalizacao('1', '2', '3');
const endereco2 = new MostraLocalizacao('1', '2', '3');

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep;
}

function saoIdenticos(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log('saoIguais?', saoIguais(endereco1, endereco2));
console.log('saoIdenticos?', saoIdenticos(endereco1, endereco2));