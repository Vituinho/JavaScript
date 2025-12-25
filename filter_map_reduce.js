// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor);
console.log(numerosPares);

// A função filter, só manda boolean(true/false), no caso ela é como se fosse a junção de um if com um for
// Função map, pega os valores e faz algo com eles, tipo, dobra os valores, e sempre coloque um return!
// Função reduce, serve 99% das vezes para somar todos os valores, em um só elemento 
// Quando for usar o reduce, com arrow function, coloca o acumulador, valor usado na function( <AQUI> ) entre parenteses, assim funciona