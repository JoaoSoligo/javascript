var num = [14, 13, 16, 15]
num.push(17)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(14)
if (pos == -1) {
    console.log('[ERRO] Valor não encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


