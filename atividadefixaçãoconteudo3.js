function CalcularSomaSubtracao() {
    var num1 = prompt('Digite o primeiro numero')
    num1 = parseFloat(num1)
    var num2 = prompt('Digite o primeiro numero')
    num2 = parseFloat(num2)

    var operacao = prompt('soma ou subtração?')

    switch (operacao) {
        case 'soma':
            resultado = (num1 + num2)
            break;
        case 'subtração':
            resultado = Math.abs(num1 - num2)
            break;
        default:
            break;
    }
}

CalcularSomaSubtracao()

document.write('O resultado é ' + resultado)