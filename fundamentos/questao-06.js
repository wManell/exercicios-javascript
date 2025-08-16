let arr = [1, 3, 2, 3, 4, 3, 2, 1, 3]
let contador = {}
let maisFrequente = arr[0]

arr.forEach(num => {
    contador[num] = (contador[num] || 0) + 1
    if (contador[num] > contador[maisFrequente]) {
        maisFrequente = num
    }
})

console.log(`Número mais frequente: ${maisFrequente}`)
