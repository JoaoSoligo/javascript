function contar() {
    var inicio = window.document.getElementById('txtin')
    var fim = window.document.getElementById('txtfim')
    var pulo = window.document.getElementById('txtpulo')
    var res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || pulo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Dados Incorretos!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pulo.value)
        
        if (p <= 0) {
            window.alert(`[ERRO] O pulo inválido!`)
        }

        if (i < f) {
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} ➡️ `
            }
        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ⬅️`
            }
        }

        res.innerHTML += 'FIM! 🏁'
    }
}
