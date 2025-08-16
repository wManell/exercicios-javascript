function maiorPalavra(frase) {
    let palavras = frase.split(" ");
    let maior = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length > maior.length) {
            maior = palavras[i];
        }
    }
    return maior;
}

console.log(maiorPalavra("UOWWW, UMA DOR NOS ZOVO DO NADA"));
