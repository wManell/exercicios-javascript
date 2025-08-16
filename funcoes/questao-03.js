function maiorMenor(lista) {
    let maior = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) maior = lista[i];
        if (lista[i] < menor) menor = lista[i];
    }

    return { maior, menor };
}

console.log(maiorMenor([10, 2, 35, 99, 1, 78, 45, 60, 3, 12]));
