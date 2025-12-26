function teste() {
    console.log('Este é meu teste');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }

    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.soma(2, 4));
//ControleRemoto.trocaPilha();

// um método de instancia ele precisa sempre criar alguma coisa com o new (alguma coisa), e o static ele já funciona dentro da classe, sem precisar de nenhuma instância, e é rodado diferente, ControleRemoto.(metodo)(); e no de instancia é controle1 = new (coisa) e ai dps, controle1.(metodo)(); metodo estatico não tem acesso aos dados da instancia