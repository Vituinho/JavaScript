function foco() {
    document.getElementById('inputz').style.background = 'yellow'
}

function desfoco() {
    const input = document.getElementById('inputz')
    const valor = input.value;

    if (valor.length < 3) {
        input.style.background = 'red'
    }
    else {
        input.style.background = 'green'
    }
}