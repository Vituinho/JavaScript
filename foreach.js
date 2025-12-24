//var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']

var listaFuncionarios = Array()

listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosângela'
listaFuncionarios[3] = 'Miguel'
listaFuncionarios[27] = 'Lucas'
listaFuncionarios[-12] = 'Fernanda'

var f = function (valor, indice) {
    document.write('<br>' + valor, ' ' + indice)
}

listaFuncionarios.forEach(f)

//foreach só aceita indices sequenciais partindo de 0, numericos

/*
console.log(listaFuncionarios)
document.write(listaFuncionarios[3])

listaFuncionarios.forEach(function(valor, indice, array) {
    //lógica
    console.log('indice ' + indice + '| valor ' + valor)

    if (valor == 'Lucas') {
        array[indice] = 'Um novo valor'
    }
})
document.write('<br>' + listaFuncionarios[3])
console.log(listaFuncionarios)
*/