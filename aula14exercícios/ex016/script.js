function contar() {
    var n1 = window.document.getElementById('Início')
    var n2 = window.document.getElementById('Fim')
    var n3 = window.document.getElementById('Passo')
    var res = window.document.getElementById('res')
    var br = document.createElement('br')
    var inicio = Number(n1.value)
    var fim = Number(n2.value)
    var passo = Number(n3.value)
    var br = document.createElement('br') 
    if (String(n1.value) == "" || String(n2.value) == "" || String(n3.value) == "") {
        res.innerHTML = 'Imposível contar'
    }
    if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        res.innerHTML = 'Contando:'
        res.appendChild(br)
        if (inicio > fim) {
            for(var c = inicio; c > fim-1; c-= 1) {
                res.innerHTML += c + '&#x1f449'
            }
            res.innerHTML += '&#x1f3c1'            
        } else {
            for(var c = inicio; c < fim+1; c+= 1) {
                res.innerHTML += c + '&#x1f449'
            }
            res.innerHTML += '&#x1f3c1'
        }
    } else {
        res.innerHTML = 'Contando:'
        res.appendChild(br)
        if (inicio > fim) {
            for(var c = inicio; c > fim-1; c-= passo) {
                res.innerHTML += c + '&#x1f449'
            }
            res.innerHTML += '&#x1f3c1'
        } else {
            for(var c = inicio; c < fim; c+= passo) {
                res.innerHTML += c + '&#x1f449'
            }
            res.innerHTML += '&#x1f3c1'
        }
    }
}