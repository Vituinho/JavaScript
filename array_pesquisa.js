var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

document.write(lista_frutas.indexOf(''))

var auxiliar = lista_frutas.indexOf('Banana')

if (auxiliar === -1) {
    document.write('Elemento não existe')
}
else {
    document.write('Elemento existe e está na posição ' + auxiliar)
}