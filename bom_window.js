var janela

function abrirPopUp() {
    janela = window.open('http://www.google.com', 'nova-janela', 'width=200, height=100')
}

function fecharPopUp() {
    janela.close()
}