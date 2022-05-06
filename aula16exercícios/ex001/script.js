var lista = [];
function Adicionar() {
    var n = window.document.getElementById('num')
    var num = Number(n.value)
    var valor = window.document.getElementById('valor') 
    var res = window.document.getElementById('res')
    if (String(n.value) == "" || num < 1 || num > 100 || n in lista) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        lista.push(num)
        var op = document.createElement('option')
        op.text = `Valor ${num} foi adicionado.`
        valor.appendChild(op)    
        res.innerHTML = ''
    }
    n.value = ''
    n.focus()
}
function Finalizar() {
    var soma = 0
    var media = 0
    var br = document.createElement('br')
    if (lista.length == 0 ) {
        window.alert('Adicione os valores antes de finalizar!')
    } else {
        for(var pos = 0; pos < lista.length+1; pos++) {
            media = pos
            res.innerHTML = ''
            res.innerHTML = `Ao todo temos ${pos} números cadastrados.` 
        }
        res.appendChild(br)
        res.innerHTML += `O maior valor informado foi ${Math.max.apply(null, lista)}.`
        res.appendChild(br)
        res.innerHTML += `O menor valor informado foi ${Math.min.apply(null, lista)}.`
        res.appendChild(br)
        for(var item in lista) {
            soma += lista[item]
        }
        res.innerHTML += `Somando todos os valores temos ${soma}.`
        res.appendChild(br)
        res.innerHTML += `A média dos valores digitados é ${soma / media}.`
    }
}