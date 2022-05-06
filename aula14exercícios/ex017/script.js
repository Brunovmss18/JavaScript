function Tabuada() {
    var n = window.document.getElementById('num')
    var tab = window.document.getElementById('Tabuada')
    if (String(n.value) == "") {
        window.alert('ERRO: Digite uma opção válida!')
    } else {
        var num = Number(n.value)
        tab.innerHTML = ''
        for(var c = 1; c < 11; c++) {
            var item = document.createElement('option')
            item.text = num + 'x' + c + '=' + num * c
            tab.appendChild(item)
        }
    }
}