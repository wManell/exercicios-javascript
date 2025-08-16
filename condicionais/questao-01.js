let a = 8;
let b = 5;

if (a % 2 !== 0 && b % 2 === 0) {
    console.log(`${a} é considerado maior (ímpar tem prioridade).`);
} else if (b % 2 !== 0 && a % 2 === 0) {
    console.log(`${b} é considerado maior (ímpar tem prioridade).`);
} else if (a > b) {
    console.log(`${a} é maior que ${b}`);
} else if (b > a) {
    console.log(`${b} é maior que ${a}`);
} else {
    console.log("Os números são iguais.");
}
