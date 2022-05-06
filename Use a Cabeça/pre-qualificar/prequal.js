var taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1957,
    color: 'Yellow',
    passengers: 4,
    convertible: false, 
    mileage: 1021
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthAlook = prequal(taxi);

if (worthAlook) {
    console.log(`You gotta check out this ${taxi.make} ${taxi.model}`);
} else {
    console.log(`You should really pass on the ${taxi.make} ${taxi.model}`);
}
