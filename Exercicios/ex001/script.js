function verificar() {
    var nac = window.document.getElementById('txtnac')
    var pais = String(nac.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `O pais em que você mora é <strong>${pais} </strong>.</br>`

    if (pais == 'Brasil') {
        res.innerHTML += `Você é <strong>brasileiro.</strong>`
    } else {
        res.innerHTML += `Você é estrangeiro, pois mora em ${pais}.`
    }
}
