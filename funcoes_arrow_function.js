/*
        let quadrado = function(x = 5) {
            return x * x
        }
        */

        /*
        let quadrado = (x) => {
            return x * x
        }
        */

        //let quadrado = x => x * x

        //document.write( quadrado(6))

        /*let parOuImpar = function(numero) {

            if(numero % 2 === 0) {
                return 'par'
            } else {
                return 'impar'
            }
        }*/

        let parOuImpar = numero => numero % 2 === 0 ? 'par' : 'impar'

        document.write(parOuImpar())