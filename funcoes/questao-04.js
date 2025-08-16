function palavraNaFrase(frase, palavra) {
    return frase.toLowerCase().includes(palavra.toLowerCase());
}

console.log(palavraNaFrase("Pelos poderes de gay que eu sou", "gay")); 
console.log(palavraNaFrase("Eu queimo a rosca", "hetero")); 
