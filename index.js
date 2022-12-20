const filmes = [
    { titulo: 'a', ano: 2022, nota: 3.5 },
    { titulo: 'b', ano: 2022, nota: 3.8 },
    { titulo: 'c', ano: 2022, nota: 2.5 },
    { titulo: 'd', ano: 1999, nota: 3.5 },
];

const titulos = filmes
    .filter(f => f.ano === 2022 && matchMedia.nota >= 3)
    .sort((a, b) => a.nota - b.nota)
    .reverse()
    .map(f => f.titulo)

    console.log('titulos', titulos)