var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = window.prompt('pressione um número de 0-6:');
    if (guess < 0 || guess > 6) {
        window.alert('Por favor, digite um número válido!');
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            window.alert('HIT!');
            if (hits == 3) {
                isSunk = true;
                window.alert('Você venceu a batalha naval')
            }
        } else {
            window.alert('MISS');
        }
    }
}
var stats = `Você precisou de ${guesses} tentativas para vencer a batalha naval com precisão de ${3/guesses}`
window.alert(stats)