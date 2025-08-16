let frase = "Meu Deus, meu Senhor, me ajuda, por favor" //to viciado no zap uWu
let novaFrase = frase.split(" ").map(palavra =>
    palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase()
).join(" ")
console.log(novaFrase)
