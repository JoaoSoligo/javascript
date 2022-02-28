function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] data invalída')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 6) {
                //Bebê
                img.setAttribute('src', 'foto-bebe-masc.png')
            } else if (idade >= 6 && idade < 13) {
                //Criança
                img.setAttribute('src', 'foto-menino.png')
            } else if (idade >= 13 && idade < 18) {
                //Jovem
                img.setAttribute('src', 'foto-garoto.png')
            } else if (idade >= 18 && idade < 60) {
                //Adulto
                img.setAttribute('src', 'foto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 6) {
                //Bebê
                img.setAttribute('src', 'foto-bebe-fem.png')
            } else if (idade >= 6 && idade < 13) {
                //Criança
                img.setAttribute('src', 'foto-menina.png')
            } else if (idade >= 13 && idade < 18) {
                //Jovem
                img.setAttribute('src', 'foto-garota.png')
            } else if (idade >= 18 && idade < 60) {
                //Adulta
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}