const blog = {
    titulo: 'a',
    corpo: 'b',
    autor: 'c',
    visualizacoes: 1,
    comentarios: [
        {autor: 'ab', corpo: 'qq'},
        {autor: 'bbb', corpo: 'pppp'}
    ],
    taOn: true
};
console.log('blog', blog);

function Postagem(titulo, corpo, autor) {
    this.titulo = titulo;
    this.corpo = corpo;
    this.autor = autor;
    this.visualizacoes = 0;
    this.comentarios = [];
    this.taOn = false;
}

let postagem = new Postagem('a', 'b', 'c');
console.log('posagem', postagem);