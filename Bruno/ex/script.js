function Carregar() {
    img = document.getElementById('img');
    msg = document.getElementById('msg');
    data = new Date();
    hora = data.getHours();
    msg.innerHTML = `São ${hora} horas`;
    if (hora >= 5 && hora < 12) {
        img.src = 'imagens/manhã.png';
        document.body.style.background = '#fbe590'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#ff9411'
    } else {
        img.src = 'imagens/noite.png';
        document.body.style.background = '#433834'
    }
}