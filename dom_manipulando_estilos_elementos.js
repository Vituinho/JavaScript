function modificaEstilo(corDeFundo, l, a) {
    document.getElementById('quadrado').style.background = corDeFundo
    document.getElementById('quadrado').style.width = l
    document.getElementById('quadrado').style.height = a
}

function modificaTamanho(width, height) {
    let imagem = document.getElementById('pessoa')
    imagem.style.width = width
    imagem.style.height = height
}