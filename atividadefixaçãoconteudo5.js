var objetos = Array('Cadeira', 'Impressora', 'Garfo')

var add = document.getElementById('adicionar')

var ord = document.getElementById('ordenar')

function BotaoAd() {
    var valorContido = document.getElementById('valor').value

    console.log(valorContido)

    if (valorContido === '') {
        alert('Informe um valor válido.')
    }
    else {
        if (objetos.includes(valorContido)) {
            alert('Objeto já foi adicionado')
        }
        else {
            objetos.push(valorContido)
            console.log(objetos)
        }
    }
}

function BotaoOr() {
    objetos.sort()
    console.log(objetos)
}