//Objetos
/* let pessoa = {
    nome: 'Leandro',
    sobrenome: 'Assis',
    idade: 26
};

//Dot Notation
pessoa.nome = 'Josef';

//Bracket Notation
pessoa['nome'] = 'Alejandro';
console.log(pessoa.nome); */

//Arrays
/* let minhaCor = ['vermelho', 'azul'];
minhaCor[2] = 'verde';
minhaCor[3] = 1;
console.log('minhaCor', minhaCor.length) */

//Functions
/* function cumprimento(nome, sobrenome) {
    console.log('oioioi ' + nome + ' ' + sobrenome);
}
cumprimento('Lisandro', 'Assis');
cumprimento('Alejandro', 'Assis'); */

//Tipos de Funções
/* //Realizando Tarefa
function cumprimento(nome, sobrenome) {
    console.log('oioioi ' + nome + ' ' + sobrenome);
}
cumprimento('Lisandro', 'Assis');
cumprimento('Alejandro', 'Assis');

//Calculando um valor
function quadrado(numero) {
    return numero*numero;
}
console.log(quadrado(2)) */

//Operadores ternários
/* //Se um cliente possui mais de 100 pontos, ele é um cliente 'ouro',
//do contrário, ele é um cliente 'prata'

let pontos = 110;
let tipo = pontos > 100 ? 'ouro' : 'prata';
console.log('tipo', tipo) */

//if else
/* let hora = 19
if (hora >= 6 && hora < 12) 
    console.log('bom dia!');
else if (hora >= 12 && hora < 18) 
    console.log('boa tarde!');
else 
    console.log('boa noite!'); 
*/

//Switch Case
/* let cargo = 'convidado';

switch (cargo) {
    case 'convidado': 
        console.log('Convidado');
        break;
    case 'moderador':
        console.log('moderador');
        break;
    case 'administrador':
        console.log('administrador');
        break;
    default:
        console.log('desconhecido');
} */

/* //For
for (let i = 0; i <= 5; i++) {
    if (i%2 !== 0)
        console.log('i', i);
}

//While
let i = 0;
while (i < 5) {
    if (i%2 !== 0) console.log('i', i);
    i++;
}

//Do... While
let i = 0;
do {
    if (i%2 !== 0) console.log('i', i);
    i++;
} while (i < 5); */

/* //For... In
let pessoa = {
    nome: 'Alejandro',
    ideda: 30
};

for (let key in pessoa)
    console.log(key, pessoa[key]);

//For... of
const cores = ['vermelho', 'azul', 'verde'];

for (let cor of cores)
    console.log(cor) 
*/

/* //Break e Continue
let i = 0;
while (i <= 10) {
    //if (i === 5) break;
    if (i%2 === 0) {
        i++;
        continue;
    }
    console.log('i', i);
    i++
} */

//exercicio 1
/* function max (num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(max(5, 2)); */

//exercicio 2
/* function ehPaisagem(largura, altura) {
    return (largura > altura);
}
console.log(ehPaisagem(5,3)); */

//FizzBuzz
/* const output = FizzBuzz(15);
console.log(output);

function FizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    return input;
} */

//checkSpeed

/* limiteVelocidade(130);

function limiteVelocidade(velocidade) {
    const limite = 70;
    const kmPorPonto = 5;

    if (velocidade < limite + kmPorPonto) {
        console.log('Ok');
        return;
    }
    const pontos = Math.floor((velocidade - limite) / kmPorPonto);
    if (pontos >= 12) 
        console.log('Habilitação suspensa')
    else 
        console.log('pontos', pontos);
} */

//Even and Odd
/* mostraNumeros(100);

function mostraNumeros(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) console.log('Par', i);
        else console.log('Impar', i);
    }
} */

//Count Truthy
/* function contaVerdadeyro(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;   
} */

//propriedades
/* const filme = {
    titulo: 'Pi',
    anoLancamento: 1998,
    nota: 5,
    diretor: 'Daren Aronofsky'
};

mostraPropriedades(filme);

function mostraPropriedades(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
} */

//soma de multiplos
/* console.log(soma(10));

function soma(limite) {
    let soma = 0;

    for (let i = 0; i <= limite; i++)
        if (i % 3 ===0 || i % 5 === 0)
            soma += i;

    return soma;
} */

//calcula notas
/* const notas = [80, 80, 50]

console.log(calculaNota(notas))

function calculaNota(notas) {
    const media - calculaMedia(notas)
    if (media < 60) return 'F';
    if (media < 70) return 'D';
    if (media < 80) return 'C';
    if (media < 90) return 'B';
    return 'A';

}

function calculaMedia(notas) {
    let soma = 0;
    for (let nota of notas)
        soma += nota;
    return soma / notas.length;
} */

//estrelas
/* mostraEstrelas(5);

function mostraEstrelas(colunas) {
    for (let coluna = 1; coluna <= colunas; coluna++) {
        let padrao = '';
        for (let i = 0; i < coluna; i++)
            padrao += '*';
        console.log(padrao);
    }
} */

//mostra primos
/* mostraPrimos(20000);

function mostraPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++)
        if (ehPrimo(numero)) console.log(numero);
}

function ehPrimo(numero) {
    for (let fator = 2; fator < numero; fator++)
        if (numero % fator === 0)
            return false;
    return true;
} */

//Programação Orientada a Objetos
/* const circulo = {
    raio: 1,
    localizacao: {
        x: 1,
        y: 1
    },
    ehVisivel: true,
    desenha: function() {
        console.log('draw');
    }
}; */

//Factor (Camel Notation)
/* function criaCirculo(raio) {
    return {
        raio,
        desenha() {
            console.log('desenhando');
        }
    };
}

const circulo1 = criaCirculo(1);
console.log('circulo1', circulo1);

const circulo2 = criaCirculo(2);
console.log('circulo2', circulo2); */

//Constructor (Pascal Notation)
/* function Circulo(raio) {
    this.raio = raio;
    this.desenha = function() {
        console.log('desenha');
    }
}

const circulo = new Circulo(1); */

//Natureza Dinâmica de Objetos
/* const circulo = {
    raio: 1
};

circulo.cor = 'amarelo';
circulo.desenha = function() {}

delete circulo.cor;
delete circulo.desenha;

console.log('circulo', circulo); */

//Propriedades do construtor
/* function criaCirculo(raio) {
    return {
        raio,
        desenha: function() {
            console.log('desenha');
        }
    };
}
const circulo = criaCirculo(1);

function Circulo(raio) {
    this.raio = raio;
    this.desenha = function() {
        console.log('desenha');
    }
}
const circulo2 = new Circulo(1); */

// Primitivos e Objetos (Value Types and Reference Types)
// Primitivos são copiados pelo valor
// Objetos são copiados pela referência
/* let obj = { value: 10};

function incrementa(obj) {
    obj.value++;
}

incrementa(obj);
console.log('numero', obj); */

//Enumerando propriedades em um objeto
/* const circulo = {
    raio: 1,
    desenha() {
        console.log('desenha');
    }
};

for (let key in circulo)
    console.log(key, circulo[key]);

for (let key in Object.keys(circulo))
console.log(key);

for (let key in Object.entries(circulo))
    console.log(key); */

// Colnando Objetos
/* const circulo = {
    raio: 1,
    desenha() {
        console.log('desenha');
    }
};

/* const outro = {};
for (let key in circulo)
    outro[key] = circulo[key]; */

/* const outro = Object.assign({
    cor: 'amarelo'
}, circulo); */

/*const outro = { ...circulo};
console.log(outro); */

// String
/* // String Primitive
const mensagem = 'Primeira mensagem!!';

// String Object
const outro = new  String('oi'); */

// Template
/* const mensagem = 
`Essa é a minha 
'primeira' mensagem`; */

// Date
const agora = new Date();
const data1 = new Date('20 de dezembro de 2022, 10h30');
const data2 = new Date(2022, 11, 20, 10);

agora.setFullYear(2020);