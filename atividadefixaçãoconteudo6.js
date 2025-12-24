var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

for (var y = 0; y < lista_frutas.length; y++) {
    document.write(lista_frutas[y] + '<br>')
}

document.write('<hr>')

var x = 1
var y = 1


while (y <= 10) {
    x = 1; //Em uma tabuada, ele sempre começa com o valor vezes 1, então sempre tem que começar com 1    
    
    while (x <= 10) {
        document.write(y + ' x ' + x + ' = ' + (y * x) + '<br>')
        x++
    }
    document.write('<hr>')
    y++
}


