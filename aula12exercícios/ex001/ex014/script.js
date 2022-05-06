function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var dia = data.getDay()
    switch(dia) {
        case 0:
            msg.innerHTML = `Hoje é Domingo e agora são ${hora}:${minuto} horas.`
            break
        case 1:
            msg.innerHTML = `Hoje é Segunda e agora são ${hora}:${minuto} horas.`
            break
        case 2:
            msg.innerHTML = `Hoje é Terça e agora são ${hora}:${minuto} horas.`
            break
        case 3:
            msg.innerHTML = `Hoje é Quarta e agora são ${hora}:${minuto} horas.`
            break
        case 4:
            msg.innerHTML = `Hoje é Quinta agora são ${hora}:${minuto} horas.`
            break
        case 5:
            msg.innerHTML = `Hoje é Sexta e agora são ${hora}:${minuto} horas.`
            break
        case 6:
            msg.innerHTML = `Hoje é Sabado e agora são ${hora}:${minuto} horas.`                        
    }
    if (hora >= 0 && hora < 12) {
        // bom dia!
        img.src = 'Foto_da_manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde!
        img.src = 'Foto_da_tarde.png'
        document.body.style.background = '#e68f47'
    } else {
        // boa noite!
        img.src = 'Foto_da_noite.png'
        document.body.style.background = '#092033'
    }
}

