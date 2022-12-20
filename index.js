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
const endereco = new MostraLocalizacao('1', '2', '3');
console.log('endereco', endereco);