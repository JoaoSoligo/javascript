var idade = 17

/*
if (idade < 16) {
    console.log(`Sua idade é ${idade} anos. Não pode votar.`)
} else {
    if (idade >= 16 && idade < 18) {
        console.log(`Sua idade é ${idade} anos. Voto opcional.`)
    } else {
        console.log(`Sua idade é ${idade} anos. Voto obrigatório.`)
    }
}
*/

if (idade < 16) {
    console.log(`Sua idade é ${idade} anos. Não pode votar.`)
} else if (idade >= 16 && idade < 18 || idade >= 65) {
    console.log(`Sua idade é ${idade} anos. Voto opcional.`)
} else {
    console.log(`Sua idade é ${idade} anos. Voto obrigatório.`)
} 