function inverterNumero(num) {
    let str = String(num);
    let invertido = "";

    for (let i = str.length - 1; i >= 0; i--) {
        switch (str[i]) {
            case "0": invertido += "0"; break;
            case "1": invertido += "1"; break;
            case "2": invertido += "2"; break;
            case "3": invertido += "3"; break;
        }
    }
    return Number(invertido);
}

console.log(inverterNumero(132)); 
