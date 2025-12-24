function soma(a,b) {
    //b = b === undefined ? 0 : b
    return a + b
}
console.log(soma(7,7))
console.log(soma(7,7,9,15)) //desconsidera os adicionais.
console.log(soma(7))
console.log(soma()) //undefined + undefined = NaN (not a number)
