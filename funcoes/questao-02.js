function contarVogaisConsoantes(frase) {
    let vogais = "aeiouáéíóúãõâêîôû";
    let v = 0, c = 0;

    frase = frase.toLowerCase().replace(/[^a-záéíóúãõâêîôû]/g, "");

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            v++;
        } else {
            c++;
        }
    }

    return { vogais: v, consoantes: c };
}

console.log(contarVogaisConsoantes("Abre a boca Davi"));