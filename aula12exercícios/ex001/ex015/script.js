function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'Homem_bebe250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Homem_jovem250.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Homem_adulto250.png')
            } else {
                //idoso
                img.setAttribute('src', 'Homem_idoso250.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'Mulher_bebe250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Mulher_jovem250.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Mulher_adulta250.png')
            } else {
                //idoso
                img.setAttribute('src', 'Mulher_idosa250,png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}