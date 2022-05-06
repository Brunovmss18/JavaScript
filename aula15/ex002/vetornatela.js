var valores = [2, 3, 5, 8, 9, 1]
/*for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
var pos = valores.indexOf(0)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}