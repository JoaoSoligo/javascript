var area = window.document.getElementById('area')
area.addEventListener('mouseenter', entrar)
area.addEventListener('click', clicar)
area.addEventListener('mouseout', sair)

function entrar() {
    area.innerHTML = 'Entrou'
    area.style.color = '#220ba5'
    area.style.background = 'blue'
}

function clicar() { 
    area.innerHTML = 'Clicou'
    area.style.color = '#fdc200'
    area.style.background = 'yellow'
}

function sair() {
    area.innerHTML = 'Saiu'
    area.style.color = '#0bb1b1'
    area.style.background = 'rgb(37, 214, 214)'
}