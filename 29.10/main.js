
console.log('Oi, gente');

function cifrarAtbash () {
    let alfaMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alfaMinusculo = "abcdefghijklmnopqrstuvwxyz"
    let saida = ""
    for (let i=0; i<TextDecoder.length; i++) {
        //console.log("letra: ", texto[i]);

        let letterIn = texto[i];
        let letterOut = " ";
        if(letterIn != " ") {
            let pos = alfaMaiusculo.search(letterIn)
            if (pos != -1) {
                letterOut = alfaMaiusculo(alfaMaiusculo.length-pos-1)
            } else {
                pos = alfaMinusculo.search(letterIn)
                letterOut = alfaMinusculo[alfaMinusculo.length-pos-1]
            }
        console.log("letterOut: ", letterOut);
        saida = saida + letterOut
        }

    return saida
    }
}
let cifrado = cifrarAtbash("Al face")
console.log("cifrado", cifrado);
let decifrado = cifrarAtbash(cifrado)
console.log("decifrado", decifrado);

/* ASCII 
65 = A
66 = B
...
92 = a
93 = b
*/

"A".charCodeAt(0) // Devolte o código ASCII da letra, no caso 65

String.fromCharCode(65) // Devolve a letra que corresponde ao código 65, no caso "A"

String.fromCharCode(90) // Devolve Z

