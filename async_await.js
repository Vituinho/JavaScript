function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min)) + min;
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Bad Value');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

/* esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase);
    })
    .catch(e => console.log(e)); */

async function executa() {

    try {

    const fase1 = await esperaAi('Fase 1', rand())
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);

    } catch(e) {
        console.log(e);
    }

}

executa();

// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada

/* A palavra async antes de uma função faz com que ela retorne uma promise a palavra await faz com que a execução da função async pause até que a promise seja resolvida o await só pode ser usado dentro de funções declaradas com async  uso de try/catch dentro de funções async permite o tratamento de erros de forma semelhante ao uso de .catch() em promises */