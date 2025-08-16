const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
const agora = new Date()

console.log(`Hoje é: ${diasSemana[agora.getDay()]}.`)
console.log(`A hora atual é: ${agora.toLocaleTimeString('pt-BR')}`)
