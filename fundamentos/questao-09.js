let frase2 = "Aprender JavaScript é legal"
let somaTamanhos = frase2.split(" ").reduce((acc, palavra) => acc + palavra.length, 0)
console.log(`Soma dos tamanhos: ${somaTamanhos}`)
