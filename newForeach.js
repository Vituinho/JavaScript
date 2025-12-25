const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;

a1.forEach(valor => {
    total += valor;
});

console.log(total)

// Bem importante lembrar, que o Foreach do JS é diferente dos outros, ele usa a1.forEach sendo com um ponto e depois o foreach, bem interessante, porem diferente, e ele vem com valor, indice e array, q nem o filter, map e reduce