fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));

// fetch retorna uma promise e serve pra fazer uma requisição HTTP para qualquer lugar, URL/API/arquivo e etc...