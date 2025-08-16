let alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [80, 70, 65]],
    ["Aluno4", [100, 90, 95]],
    ["Aluno5", [40, 50, 60]]
];

for (let i = 0; i < alunos.length; i++) {
    let nome = alunos[i][0];
    let notas = alunos[i][1];
    let soma = 0;

    for (let j = 0; j < notas.length; j++) {
        soma += notas[j];
    }

    let media = soma / notas.length;
    let situacao = media >= 70 ? "Aprovado" : "Reprovado";

    console.log(`${nome}, média ${media.toFixed(2)}, ${situacao}.`);
}
