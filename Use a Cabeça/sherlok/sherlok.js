var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        amount = balance.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
    }
    cameraOn = true;
    return amount; 
}

var amount = steal(balance, 1250);
console.log(`Criminal: you stole ${amount}!`);
