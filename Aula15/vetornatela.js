var valores = [6, 4, 7, 5]
valores.sort()
//console.log(valores)

/*
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])

for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (var pos in valores) {
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}